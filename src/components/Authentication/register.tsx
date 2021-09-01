import {
    Container,
    Forms,
    RecoverButton,
    SubmitButton,
    HandleButton,
    ContentRight,
    Title
} from "./styles";

import React from 'react'
import { Text, View } from 'react-native'
import Input from "../Input";
import Button from "../Button";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api'
import InputForm from "../InputForm";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


interface FormData {
    name: string;
    email: string;
    password:string;
    
}
const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome Obrigatorio')
    .min(6, 'Nome menor q 6'),
    email: Yup
    .string()
    .required('Email Obrigatorio')
    .email('Email invalido'),
    password: Yup
    .string()
    .required('Senha Obrigatorio')
    .min(6, 'Senha menor q 6'),
    
});




const Register = () => {

    
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    });


    const navigation = useNavigation();


    const handleSingUp = async (form: FormData) => {
        console.log('a')
        const data = {
            username: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password
        }

        console.log(data)
        await api.post('/users', data)
        navigation.navigate('SignIn')
    }
 
    const handleBack = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container >

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
