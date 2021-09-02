import React, { useEffect, useState } from 'react'
import { Container, TextColor, Title, Content, SubTitle, GameButton, Line, GamesContainer, Game } from "./styles";
import Authentication from '../../components/Authentication/auth'
import Header from '../../components/Header'
import api from '../../services/api'
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, FlatList } from 'react-native'

var esportes = [];
export default function Home() {

    const [betType, setBetType] = useState<any>([])
    const [bets, setBets] = useState([])
    const [betsFilter, setbetsFilter] = useState([])
    const [page, setPage] = useState(null)
    const [pageCurrent, setPageCurrent] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)
    const [offSet, setOffset] = useState(0)
    const [urlParams, setUrlParams] = useState('')



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
        const response = await api.get('/bets?page=2', config)
        const { data } = response;
   
        setBets(data.data)
    }


    //Função para filtrar
    function handleBetFilter(index, field) {
        console.log(field)

        let aux = betType;


        if (aux[index].selected) {
            aux[index].selected = false;
        } else {
            aux[index].selected = true;
        }

        setBetType([...aux]);

        if (aux[index].selected) {
            console.log('aqui')
            getData()
            if (field.type === aux[index].type && aux[index].selected) {

                var total = esportes.push(`&arry[]=${field.id}`);

                var tics = esportes.join('')
                console.log(esportes);
                console.log(tics);
                setUrlParams(tics)

                return true;
            }
        } else {
            console.log('sdsd')
            getData()



            var ab = numeros.indexOf(index);
            if (ab > -1) {
                esportes.splice(index, 1);
            }



            var estados = esportes
            var buscar = `&arry[]=${field.id}`;
            var indice = estados.indexOf(buscar);
            while (indice >= 0) {
                estados.splice(indice, 1);
                indice = estados.indexOf(buscar);
            }
            console.log(estados);






            var tics = esportes.toString().replaceAll(`&arry[]=${field.id}`, '');
            var resultado = urlParams.toString().replaceAll(`&arry[]=${field.id}`, '');
            console.log(resultado)
            console.log(tics)
            console.log(esportes);

            var tics = esportes.join('')
            setUrlParams(tics)


        }

        return;
    }

    //Função para verificar filtro
    function filterSelected() {
        for (let i = 0; i < betType.length; i++) {
            console.log(betType[i].selected)
            if (betType[i].selected) {
                return true
            };
        }
        return false;
    }



    function onPageChange(page) {
        setOffset((page - 1) * pageTotal)
    }




    //------------------------------------------------------------------------------

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
                    {betType.map((field, index) => {

                        return (
                            <GameButton
                                key={field.type}
                                onPress={() => handleBetFilter(index, field)}
                                backgroundColor={field.selected ? field.color : "#FFFFFF"}
                                fontColor={!field.selected ? field.color : "#FFFFFF"}
                                borderColor={field.color}
                            >
                                <Text>
                                    {field.type}
                                </Text>
                            </GameButton>
                        )
                    })
                    }
                </Content>



                <GamesContainer>

                    <FlatList
              
                     showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        data={bets}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Game color={item.types.color}>
                                <Line color={item.types.color} />
                                <View>
                                    <Text>{item.numbers}</Text>

                                    <Text>{new Date(item.created_at).toLocaleDateString('pt-br')} -
                                        ({`R$ ${item.price.toFixed(2).replace(".", ",")}`})</Text>

                                    <TextColor color={item.types.color}>{item.types.type}</TextColor>
                                </View>

                            </Game>




                        )} />

                </GamesContainer>






            </Container>
        </>
    )
}

