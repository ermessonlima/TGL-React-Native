import {
    Container,
    Forms,
    RecoverButton,
    SubmitButton,
    HandleButton,
    ContentRight,
    Title
} from "./styles";
import React, { useState, useCallback } from 'react'
import { Text, View, ToastAndroid } from 'react-native'
import Input from "../Input";
import Button from "../Button";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import InputForm from "../InputForm";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api'


interface FormData {
    email: string;
    password:string;
    
}
const schema = Yup.object().shape({
    email: Yup
    .string()
    .required('Email Obrigatorio')
    .email('Email invalido'),
    password: Yup
    .string()
    .required('Senha Obrigatorio')
    .min(6, 'Senha menor q 6'),
    
});


const Authentication = () => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    });

    const navigation = useNavigation();

    const handleSingUp = () => {
        navigation.navigate('SignUp')
    }

    const handleSignIn = async (form: FormData) => {
        console.log('redfdre')
  
        await api.post('/sessions', {
            email: form.email,
            password: form.password
        }).then( res => {
            console.log(res.data.user.username)
            console.log(res.data)
            dispatch({
                type: 'ADD_NOTE',
                payload: {
                data: {  
                  name: res.data.user.username,
                  email: form.email,
                  password: form.password,
                  token: res.data.token.token}
                }
              })
              navigation.navigate('HomeTab')

        })
        console.log('redfdre')

    
    }

    const handleRecover = () => {
        dispatch({
            type: 'ADD_NOTE',
          })
       console.log('dd')
    }

    return (
        <Container >
            <Title>Authentication</Title>



            <Forms >
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

                <ContentRight>
                    <Button
                        onPress={handleRecover}
                        color="#707070"
                        fontSize={'15px'} >
                        <Text >  I forgot my password  </ Text>
                    </Button>
                </ContentRight>
                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={handleSubmit(handleSignIn)}>
                    Log In
                    <AntDesign
                        name="arrowright"
                        size={30}
                        color="#B5C401" />
                </ Button>
            </Forms>


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

export default Authentication;
