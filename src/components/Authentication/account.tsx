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


const AccountScreen = () => {

    const navigation = useNavigation();

    const handleSingUp = () => {
        navigation.navigate('SignIn')
    }

    return (
        <Container >

            <Title>
                Hi,Ermesson!
            </Title>

            <Form >

                <Input
                    name="name"
                    placeholder="Name"
                />
               <Input
                    name="password"
                    icon="password"
                    placeholder="Password"
                />

                <Input
                    name="password"
                    icon="password"
                    placeholder="Repeat password"
                />

                <Button
                    fontSize={'30px'}
                    color="#B5C401"
                    onPress={() => { console.log('deu') }}>
                    Change
                </ Button>


            </Form>
          

       

        </Container>
    );
};

export default AccountScreen;
