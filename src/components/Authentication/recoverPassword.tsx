import {
    Container,
    FormRecover,
    Title
} from "./styles";

import React from 'react'
import { View } from 'react-native'
import Input from "../Input";
import Button from "../Button";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const Recover = () => {

    const navigation = useNavigation();

    const handleSingUp = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container >

            <Title>Reset password</Title>

            <FormRecover >

                <Input
                    name="email"
                    placeholder="Email"
                />

                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={() => { console.log('deu') }}>
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
                color="#707070" onPress={handleSingUp}>
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
