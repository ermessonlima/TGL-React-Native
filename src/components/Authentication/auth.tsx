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


const Authentication = () => {

    const navigation = useNavigation();

    const handleSingUp = () => {
        navigation.navigate('SignUp')
    }
    const handleLogin = () => {
        navigation.navigate('HomeTab')
    }
    const handleRecover = () => {
        navigation.navigate('Recover')
    }

    return (
        <Container >
            <Title>Authentication</Title>
            <Form >

                <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                />
                <Input
                    name="passaword"
                    icon="passaword"
                    placeholder="Passaword"
                    secureTextEntry
                />
                
                <ContentRight>

                    <Button
                    onPress={handleRecover}
                        color="#707070"
                        fontSize={'15px'}
                    >
                        <Text >  I forgot my password  </ Text>
                    </Button>
                </ContentRight>

                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={handleLogin}>
                    Log In
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
