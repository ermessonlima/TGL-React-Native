import React from 'react'
import * as Yup from 'yup';
import Button from "../Button";
import api from '../../services/api'
import InputForm from "../InputForm";
import { useForm } from 'react-hook-form';
import { Container, Forms, Title} from "./styles";
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from 'react-redux';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .min(6, 'Minimum 6 characters'),
    password: Yup
        .string()
        .min(6, 'Minimum 6 characters'),

});
const AccountScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.notes.data)
    const config = {
        headers: { Authorization: `Bearer ${data.token}` }
    };
    const {   
        reset,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver:yupResolver(schema)
    });

    const handleSingUp = async (form: FormData) => {
        console.log('a')
        const dataForm = {
            username: form.name,
            password: form.password,
        }
        try {
            console.log(dataForm)
            console.log(config)
            await api.put('/users', dataForm, config)
            dispatch({
                type: 'ADD_NOTE',
                payload: {
                data: { 
                    ...data, 
                  name: form.name,
                }}
              })
              reset()
        }catch(e) {
            console.log(e)
        }
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
