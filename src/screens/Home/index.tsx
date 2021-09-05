import api from '../../services/api'
import { useSelector } from 'react-redux';
import { format, parseISO } from "date-fns";
import Header from '../../components/Header';
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import { Container, TextColor, Title, Content, SubTitle, GameButton, Line, GamesContainer, Game } from "./styles";

export default function Home() {

    const [bets, setBets] = useState<any>([])
    const [bets2, setBets2] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [betType, setBetType] = useState<any>([])
    const data = useSelector((state: any) => state.notes.data)

    const config = {
        headers: { Authorization: `Bearer ${data.token}` }
    };

    useEffect(() => {
        async function getData() {
            const response = await api.get('/games')
            const { data } = response;
            setBetType(data)
        }
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        setLoading(true)
        const response = await api.get(`/bets`, config)
        const { data } = response;
        setBets2(data.data)
        setBets(data.data)
        setLoading(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            getData()
        }, [])
    );

    //Função para filtrar
    function handleBetFilter(index: any) {
        let aux = betType;
        // @ts-ignore
        aux[index].selected = !this.selected;
        setBetType([...aux]);
        if (filterSelected()) {
            setBets(
                bets2.filter((bet: any) => {
                    for (let i = 0; i < aux.length; i++) {
                        if (bet.types.type === aux[i].type && aux[i].selected)
                            return true;
                    }
                    return false;
                })
            );
        } else {
            setBets(bets2);
        }

        return;
    }
    //Função para verificar filtro
    function filterSelected() {
        for (let i = 0; i < betType.length; i++) {
            if (betType[i].selected) {
                return true
            };
        }
        return false;
    }

    function FooterList({ load }: any) {
        if (!load) return null;
        return (
            <View>
                <ActivityIndicator size={25} color="#000" />
            </View>
        )
    }

    return (
        <>
            <Header view={false} />
            <Container >
                <Title>
                    RECENT GAMES
                </Title>
                <SubTitle>
                    Filters
                </SubTitle>
                <Content>
                    {betType.map((field: any, index: any) => {
                        return (
                            <GameButton
                                key={index}
                                onPress={() => handleBetFilter.call(field, [index])}
                                backgroundColor={field.selected ? field.color : "#FFFFFF"}
                                borderColor={field.color}
                            >
                                {field.selected &&
                                    <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', top: 0, right: 10 }}>
                                        x
                                    </Text>}
                                <Text style={{
                                    color: !field.selected ? field.color : "#fff",
                                    fontWeight: 'bold', fontStyle: 'italic'
                                }}>
                                    {field.type}
                                </Text>
                            </GameButton>
                        )
                    })
                    }
                </Content>
                <GamesContainer>
                    {bets.length > 1 && <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%', marginBottom: 50 }}
                        data={bets}
                        keyExtractor={item => item.id.toString()}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={<FooterList load={loading} />}
                        renderItem={({ item }) => (
                            <Game >
                                <Line color={item.types.color} />
                                <View>
                                    <Text>{item.numbers}</Text>
                                    <Text>{format(parseISO(item.created_at), 'dd/MM/yy')} -
                                        ({`R$ ${item.price.toFixed(2).replace(".", ",")}`})</Text>
                                    <TextColor color={item.types.color}>{item.types.type}</TextColor>
                                </View>
                            </Game>
                        )} />}
                </GamesContainer>
            </Container>
        </>
    )
}

