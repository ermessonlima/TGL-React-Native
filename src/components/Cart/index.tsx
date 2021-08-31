import React from 'react'
import { Container, Box, BoxExit, Title, Content } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TabMoney from '../IconsTabBar/TabMoney'
import { View } from 'react-native'
import Button from "../Button";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Cart({ setModalOpen, value }: any) {

    const navigation = useNavigation();
    const closedModal = () => {
        setModalOpen(false)
    }

    const handleHome = () => {
        navigation.navigate('Home')
        setModalOpen(false)
    }

    return (
        <>
            <Container >
                <Content>
                    <BoxExit>
                        <Button
                            fontSize={'25px'}
                            color="#B5C401"
                            onPress={closedModal}>
                            X
                        </ Button>
                    </ BoxExit>
                    <Box>
                        <MaterialCommunityIcons name="cart-outline" size={30} color="#B5C401" />
                        <Title>
                            CART {value}
                        </Title>
                    </Box>
                </Content>
                <View style={{
                    backgroundColor: '#EBEBEB',
                    width: 265,
                    height: 94,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button
                        fontSize={'30px'}
                        color="#B5C401"
                        onPress={handleHome}>
                        Save
                        <AntDesign
                            name="arrowright"
                            size={30}
                            color="#B5C401" />
                    </ Button>
                </View>
            </Container>
            <View style={{
                position: 'absolute',
                bottom: 0,
                marginBottom: -18,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TabMoney />
            </View>

        </>
    )
}

