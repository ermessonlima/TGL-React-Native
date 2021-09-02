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
import InputForm from "../InputForm";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { useSelector, useDispatch } from 'react-redux';



interface FormData {
    name: string;
    email: string;
    password: string;

}
const schema = Yup.object().shape({
    name: Yup
        .string()
        .min(6, 'Nome menor q 6'),
    password: Yup
        .string()
        .min(6, 'Senha menor q 6'),

});







const AccountScreen = () => {
    const dispatch = useDispatch();
    
    const data = useSelector((state: any) => state.notes.data)

    const config = {
        headers: { Authorization: `Bearer ${data.token}` }
    };


    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    });

    const handleSingUp = async (form: FormData) => {
        console.log('a')
        const data = {
            username: form.name,
            password: form.password,
        }
        console.log(data)

        console.log(data)
        await api.put('/users', data, config)

        dispatch({
            type: 'ADD_NOTE',
            payload: {
            data: {  
              name: form.name,

            }
            }
          })
        
    }

    return (
        <Container >

            <Title>
                Hi, {data.name}!
            </Title>

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
                    Change
                </ Button>


            </Forms>




        </Container>
    );
};

export default AccountScreen;
