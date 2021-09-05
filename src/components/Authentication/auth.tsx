import * as Yup from 'yup';
import Button from "../Button";
import ModalAlert from '../Modal';
import api from '../../services/api'
import InputForm from "../InputForm";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Modal, Alert } from 'react-native'
import * as Progress from 'react-native-progress';
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from "@react-navigation/native";
import { Container, Forms, ContentRight, Title, Loading } from "./styles";

interface FormData {
    email: string;
    password: string;

}
const schema = Yup.object().shape({
    email: Yup
        .string()
        .required('Email required')
        .email('Invalid email'),
    password: Yup
        .string()
        .required('Password required')
        .min(6, 'Minimum 6 characters'),
});

const Authentication = () => {
    const [loading, setLoading] = useState<any>(false);
    const [modalError, setModalError] = useState(false)
    const dispatch = useDispatch();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const navigation = useNavigation();
    const handleSingUp = () => {
        navigation.navigate('SignUp')
    }

    const handleSignIn = async (form: FormData) => {
   
        setLoading(true)
   

        try{
            await api.post('/sessions', {
                email: form.email,
                password: form.password
            }).then(res => {
                console.log(res.data.user.username)
                console.log(res.data)
                dispatch({
                    type: 'ADD_NOTE',
                    payload: {
                        data: {
                            name: res.data.user.username,
                            email: form.email,
                            password: form.password,
                            token: res.data.token.token
                        }
                    }
                })
                
                setTimeout(function () {
                    navigation.navigate('HomeTab')
                    setLoading(false)
                    reset()
                        ;
                }, 2000);
            })
        }catch {
            setModalError(true)
                setLoading(false)
             
        }
    }
    const handleRecover = () => {
        navigation.navigate('Recover')
    }

    return (
        <Container >

            <ModalAlert errorName={'Invalid user'} visible={modalError} set={setModalError}/>

            {loading && 
            <Modal visible={loading} transparent>
                <Loading>
                    <Progress.CircleSnail size={150} color={['#B5C401']} />
                </Loading>
            </Modal>}
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
            </Button>
            <View style={{ bottom: 0, backgroundColor: '#fff000', right: 0, position: 'absolute' }}>
            </View>
        </Container>
    );
};

export default Authentication;
