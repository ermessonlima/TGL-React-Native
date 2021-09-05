import * as Yup from 'yup';
import Button from "../Button";
import api from '../../services/api'
import InputForm from "../InputForm";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { View, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from "@react-navigation/native";
import { Container,FormRecover,Title, Loading } from "./styles";

interface FormData {
    name: string;
    email: string;
    password: string;

}
const schema = Yup.object().shape({
    email: Yup
        .string()
        .required('Email required')
        .email('Invalid email'),

});

const Recover = () => {
    const [loading, setLoading] = useState<any>(false);
    const navigation = useNavigation();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleSendLink(form: FormData) {
        try {
            setLoading(true)
            await api.post('/passwords', {
                email: form.email,
                redirect_url: "http://localhost:3000/reset"
            });
            setLoading(false)
            reset()
        } catch (e) {
            alert('Usuario invalido')
            setLoading(false)
        }
    }
    const handleSingUp = () => {
        navigation.navigate('SignUp')
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
            <Title>Reset password</Title>
            <FormRecover >
                <InputForm
                    name="email"
                    control={control}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Email"
                    error={errors.email && errors.email.message}
                />
                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={handleSubmit(handleSendLink)}>
                    Send link
                    <AntDesign
                        name="arrowright"
                        size={30}
                        color="#B5C401" />
                </ Button>
            </FormRecover>
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
            <Button
                fontSize={'30px'}
                style={{ marginTop: 50 }}
                color="#707070" onPress={handleSingUp}>
                Sign Up
                <AntDesign
                    name="arrowright"
                    size={30}
                    color="#707070" />
            </ Button>
            <View style={{ bottom: 0, backgroundColor: '#fff000', right: 0, position: 'absolute' }}>
            </View>
        </Container>
    );
};

export default Recover;
