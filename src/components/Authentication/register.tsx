import {
    Container,
    Form,
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


const Register = () => {

    const navigation = useNavigation();

    const handleSingUp = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container >

            <Title>Registration</Title>

            <Form >

                <Input
                    name="name"
                    placeholder="Name"
                />
                <Input
                    name="email"
                    placeholder="Email"
                />

                <Input
                    name="passaword"
                    icon="passaword"
                    placeholder="Passaword"
                />

                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={() => { console.log('deu') }}>
                    Register
                    <AntDesign
                        name="arrowright"
                        size={30}
                        color="#B5C401" />
                </ Button>


            </Form>
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

            <View style={{ bottom: 0, backgroundColor: '#fff000', right: 0, position: 'absolute' }}>


            </View>

        </Container>
    );
};

export default Register;
