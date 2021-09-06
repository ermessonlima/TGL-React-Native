import api from '../../services/api'
import { useSelector } from 'react-redux';
import { format, parseISO } from "date-fns";
import Header from '../../components/Header';
import * as Progress from 'react-native-progress';
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, ActivityIndicator, Modal } from 'react-native'
import {
    Container, TextNumbers, TextColor, Title, Content, SubTitle, GameButton, Line,
    GamesContainer, Game, Loading, PageContainer, ButtonAvanc, TextButtonPage
} from "./styles";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2
// @ts-ignore
var array: any = [];

export default function Home() {

    const [bets, setBets] = useState<any>([])
    const [teste, setTeste] = useState<any>(true)
    const [bets2, setBets2] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [betType, setBetType] = useState<any>([])
    const data = useSelector((state: any) => state.notes.data)
    const [pageCurrent, setPageCurrent] = useState(1)
    const [limit, setPageTotal] = useState<any>(null)
    const [offSet, setOffset] = useState(0)
    const current = offSet ? offSet / limit + 1 : 1;
    const pages = limit;
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(Math.max(pageCurrent - MAX_LEFT, 1), maxFirst);
    const [urlParams, setUrlParams] = useState('')
    const config = { headers: { Authorization: `Bearer ${data.token}` } };

    useEffect(() => {

        async function getData() {
            const response = await api.get('/games')
            const { data } = response;
            setBetType(data)
        }
        getData()
    }, [])

    var numeros = [''];

    function onPageChange(page: any) {
        // @ts-ignore
        setOffset((page - 1) * limit)
    }

    useEffect(() => {
        getData()
    }, [])

    async function getData() {

        setLoading(true)
        const response = await api.get(`/bets?page=${current}${urlParams}`, config)
        const { data } = response;
        setPageCurrent(data.page ? data.page : 1)
        setPageTotal(data.lastPage)
        setBets(data.data)
        setLoading(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            getData()
            // @ts-ignore
        }, [offSet, urlParams, array])
    );
    //Função para filtrar
    function handleBetFilter(index: any, field: any) {

        console.log(pageCurrent)
        setLoading(true)
        let aux = betType;
        if (aux[index].selected) {
            aux[index].selected = false;
        } else {
            aux[index].selected = true;
        }
        setBetType([...aux]);
        if (aux[index].selected) {
            getData()
            if (field.type === aux[index].type && aux[index].selected) {
                var total = array.push(`&arry[]=${field.id}`);
                // @ts-ignore
                var tics = array.join('')
                setUrlParams(tics)
                setLoading(false)
                return true;
            }
        } else {
            var ab = numeros.indexOf(index);
            if (ab > -1) {
                array.splice(index, 1);
            }
            var arrayUrl = array
            var buscar = `&arry[]=${field.id}`;
            var indice = arrayUrl.indexOf(buscar);
            while (indice >= 0) {
                arrayUrl.splice(indice, 1);
                indice = arrayUrl.indexOf(buscar);
            }
            var tics = array.toString().replace(`&arry[]=${field.id}`, '');
            var resultado = urlParams.toString().replace(`&arry[]=${field.id}`, '');
            var tics = array.join('')
            getData()
            setUrlParams(tics)
            setLoading(false)
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
            {loading &&
                <Modal visible={loading} transparent>
                    <Loading>
                        <Progress.CircleSnail size={150} color={['#B5C401']} />
                    </Loading>
                </Modal>}

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
                                onPress={() => handleBetFilter(index, field)}
                                backgroundColor={field.selected ? field.color : "#FFFFFF"}
                                borderColor={field.color}>
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
                {bets.length > 1 && <PageContainer>
                    <View >
                        <ButtonAvanc
                            onPress={() => onPageChange(pageCurrent - 1)}
                            disabled={pageCurrent === 1}>
                            <TextButtonPage>  Previous  </TextButtonPage>
                        </ButtonAvanc>
                    </View>
                    {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                        .map((_, index) => index + first)
                        .map((page) => (
                            <View key={page}>
                                <ButtonAvanc
                                    style={{
                                        backgroundColor: page === pageCurrent ? '#B5C401' : '#fff',
                                    }}
                                    onPress={() => onPageChange(page)}>
                                    <TextButtonPage
                                        style={{
                                            fontSize: page === pageCurrent ? 20 : 14,
                                            fontWeight: 'bold',
                                            color: page === pageCurrent ? '#fff' : '#B5C401',
                                        }}>   {page}   </TextButtonPage>
                                </ButtonAvanc>
                            </View>
                        ))}
                    <View>
                        <ButtonAvanc
                            disabled={pageCurrent === limit ? true : false}
                            onPress={() => onPageChange(pageCurrent + 1)}
                            style={{
                                disabled: pageCurrent === limit ? true : false,
                                opacity: pageCurrent === limit ? 0.5 : 1
                            }} >
                            <TextButtonPage>     Next     </TextButtonPage>
                        </ButtonAvanc>
                    </View>
                </PageContainer>}
                <GamesContainer>
                    {bets.length > 1 && <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ width: '100%', marginBottom: 115, marginTop: -20, }}
                        data={bets}
                        keyExtractor={item => item.id.toString()}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={<FooterList load={loading} />}
                        renderItem={({ item }) => (
                            <Game >
                                <Line color={item.types.color} />
                                <View>
                                    <TextNumbers>{item.numbers}</TextNumbers>
                                    <Text style={{ color: '#868686' }}>{format(parseISO(item.created_at), 'dd/MM/yy')} -
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

