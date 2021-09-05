import * as Yup from 'yup';
import Button from "../Button";
import api from '../../services/api'
import InputForm from "../InputForm";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { View, Modal } from 'react-native'
import * as Progress from 'react-native-progress';
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from "@react-navigation/native";
import { Container, Forms, Title, Loading } from "./styles";

interface FormData {
    name: string;
    email: string;
    password: string;
}
const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name required')
        .min(6, 'Minimum 6 characters'),
    email: Yup
        .string()
        .required('Email required')
        .email('Invalid email'),
    password: Yup
        .string()
        .required('Password required')
        .min(6, 'Minimum 6 characters'),
});

const Register = () => {
    const [loading, setLoading] = useState<any>(false);
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const navigation = useNavigation();
    const handleSingUp = async (form: FormData) => {
        setLoading(true)
        const data = {
            username: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password
        }
        try {
            await api.post('/users', data)
            navigation.navigate('SignIn')
            setLoading(false)
            reset()
        } catch {
            alert('erro no registro')
            setLoading(false)
        }
    }

    const handleBack = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container >
            {loading &&
             <Modal visible={loading} transparent>
                <Loading>
                    <Progress.CircleSnail size={150} color={['#B5C401']} />
                </Loading>
            </Modal>}
            <Title>Registration</Title>
            <Forms >
                <InputForm
                    name="name"
                    control={control}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    placeholder="Name"
                    error={errors.name && errors.name.message}
                />
                <InputForm
                    name="email"
                    control={control}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Email"
                    error={errors.email && errors.email.message}
                />
                <InputForm
                    name="password"
                    control={control}
                    icon="passaword"
                    secureTextEntry
                    placeholder="Passaword"
                    error={errors.password && errors.password.message}
                />
                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={handleSubmit(handleSingUp)}>
                    Register
                    <AntDesign
                        name="arrowright"
                        size={30}
                        color="#B5C401" />
                </ Button>
            </Forms>
            <Button
                fontSize={'30px'}
                style={{ marginTop: 50 }}
                color="#707070" onPress={handleBack}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    color="#707070" />
                Back
            </ Button>
            <View style={{ bottom: 0, backgroundColor: '#fff000', right: 0, position: 'absolute' }}>
            </View>
        </Container>
    );
};

export default Register;
