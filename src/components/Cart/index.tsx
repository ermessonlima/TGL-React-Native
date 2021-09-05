import Button from "../Button";
import ModalAlert from '../Modal';
import api from '../../services/api';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TabMoney from '../IconsTabBar/TabMoney';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { View, FlatList, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Container, Box, BoxExit, Title, Content, BetInfo,
    BetsList, Subtitle, TextType, TextNumbers, Line,Loading
} from "./styles";

export default function Cart({ setModalOpen, bets, removeBet, cartValue, disabled,backgroundColor, color ,setBets,setCartValue}: any) {
    const data = useSelector((state: any) => state.notes.data)
    const [modalError, setModalError] = useState(false)
    const [loading, setLoading] = useState<any>(false);
    const config = {
        headers: { Authorization: `Bearer ${data.token}` }
    };

    const closedModal = () => {
        setModalOpen(false)
    }

    async function saveBets() {
        setLoading(true)
        const teste = bets.map((bet: any) => {
            return {
                game_id: bet.game_id,
                numbers: bet.numbers
            }
        })
        try {
            await api.post('/bets',
                teste, config
            );
            console.log(' Bet placed successfully!')
           
            setBets([])
            setCartValue(0)
            setLoading(false)
            setModalOpen(false)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    function errorBets() {
        setModalError(true)
        setLoading(false)
    }

    function convertCoin(value: any) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    return (
        <>
            <Container >
            <ModalAlert errorName={'Minimum amount, BRL 30.00'} visible={modalError} set={setModalError}/>

            {loading && 
            <Modal visible={loading} transparent>
                <Loading>
                    <Progress.CircleSnail size={150} color={['#B5C401']} />
                </Loading>
            </Modal>}

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
                            CART
                        </Title>
                    </Box>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%' }}
                        data={bets}
                        keyExtractor={item => item.numbers}
                        renderItem={({ item }) => (
                            <BetsList >
                                <Line style={{ backgroundColor: item.color }} />
                                <BetInfo >
                                    <TextNumbers>{item.numbers}</TextNumbers>
                                    <View>
                                        <Box style={{ justifyContent: 'space-between', marginLeft: -10 }}>
                                            <Subtitle style={{ color: '#707070' }}>
                                                {item.date}-{item.price}
                                            </Subtitle>
                                            <FontAwesome onPress={() => removeBet(item)} name="trash-o" size={20} color="#707070" />
                                        </Box>
                                        <TextType style={{ color: item.color }}>{item.type}</TextType>
                                    </View>
                                </BetInfo>
                            </BetsList>
                        )} />

                    <Box style={{
                        justifyContent: 'space-between', height: 50, alignItems: 'center',
                        marginRight: 10
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Title style={{ fontSize: 18 }}>CART</Title>
                            <Title style={{ fontSize: 18, fontWeight: 'normal', fontStyle: 'normal' }}>TOTAL:</Title>
                        </View>
                        <Title style={{ fontSize: 18, fontStyle: 'normal' }}>{convertCoin(cartValue)}</Title>
                    </Box>
                </Content>
                <View style={{
                    backgroundColor: backgroundColor,
                    width: 265,
                    height: 94,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                   { disabled && <Button
                        fontSize={'30px'}
                      
                        color={color}
                        onPress={saveBets}>
                        Save
                        <AntDesign
                            name="arrowright"
                            size={30}
                            color="#B5C401" />
                    </ Button>}

                    { !disabled && <Button
                        fontSize={'30px'}
    
                        color={color}
                        onPress={errorBets}>
                        Save
                        <AntDesign
                            name="arrowright"
                            size={30}
                            color="#B5C401" />
                    </ Button>}

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

