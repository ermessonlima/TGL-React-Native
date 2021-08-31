import React, { useState, useEffect } from 'react'
import { Container, SubTitle, Title, GameOptions,BallsList, AddToCart, TextButton, GameOption, Balls, Ball, BetButtons, BetButton } from "./styles";
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import { Modal } from 'react-native';
import api from '../../services/api'
import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

export default function Bets() {

    const [isModalOpen, setModalOpen] = useState(false)
    const [games, setGames] = useState<Game[]>([]);
    const [info, setInfo] = useState<any>({ ...games[0] });
    const [numbers, setNumbers] = useState<number[]>([]);
    const [bets, setBets] = useState([]);
    let [cartValue, setCartValue] = useState(0);

    useEffect(() => {
      
        async function getData() {
            const response = await api.get('/games')
            const { data } = response;
          
            setGames(data);
            setInfo(data[0])
        }
        getData()
    }, [])



    //Trocar . por ,
    function convertCoin(value) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    //Limpar numeros
    function clearNumbers() {
        return setNumbers([]);
    }

    //Retorna o primeiro element que tenha o tipo, ex.: Lotofacil, Mega-sena...
    function getBet(type: string) {
        if (type) {
            setInfo(games.find((field) => field.type === type));
            clearNumbers();

        }
    }

    //selecionar numeros
    function selectedNumbers(number) {

        let balls = numbers;
        if (balls.includes(number)) {
            balls.splice(balls.indexOf(number), 1);
        } else if (balls.length < info["max_number"]) {
           
            balls.push(number);
        } else {
            return;
        }
        return setNumbers([...balls]);
    }

    function selectedNumbersRemove(number) {

        let balls = numbers;
        if (balls.includes(number)) {
            balls.splice(balls.indexOf(number), 1);
        } else if (balls.length < info["max_number"]) {
           
            balls.push(number);
        } else {
            return;
        }
        return setNumbers([...balls]);
    }

    
    //Completar jogo
    function handleCompleteBet() {
        const numbers = []
        let balls = numbers;
        for (let i = numbers.length; i < info["max_number"]; i++) {
            let currentNumber = 0;
            do {
                currentNumber = Math.ceil(Math.random() * info.range);
            } while (numbers.includes(currentNumber));
            balls.push(currentNumber);
        }
        setNumbers([...balls])
    }

    //Adicionar 0 aos numeros menores que 10
    function handleBetNumbers() {
        return numbers.map((field) => (field < 10 ? `0${field}` : field)).sort((x: number, y: number) => x - y).join(",");
    }

    function handleNewBet() {
        return {
            numbers: handleBetNumbers(),
            game_id: info.id,
            price: convertCoin(info.price),
            color: info.color,
        };
    }

    //Adicionar ao carrinho
    function addCart(bet) {
        console.log(bet)
        console.log(bet.price)
    
        clearNumbers();
        handleUpdateCartPrice(bet.price);
        return setBets([...bets, bet]);
    }

    //Remover item do carrinho
    function removeBet(bet) {
        let cart = bets;
        cart.splice(cart.indexOf(bet), 1);
        handleUpdateCartPrice("-" + bet.price);
        return setBets([...cart]);
    }

    //Somar valor do carrinho
    function handleUpdateCartPrice(valeuStringfy: string) {
        console.log(valeuStringfy)
        const value = parseFloat( valeuStringfy.replace(/R\$ /g, "").replace(",", "."))
        console.log(value)
        setCartValue((cartValue += value));

    }


    return (
        <>
            <Header view={true} setModalOpen={setModalOpen} />
            <Container >
                <Title>
                    NEW BET FOR {info.type && info.type.toUpperCase()}
                </Title>
                <SubTitle>
                    Choose a game
                </SubTitle>
                <GameOptions >{games.map((field) => {
                    return (
                        <GameOption
                            key={field.type}
                            backgroundColor={
                                field.type === info.type ? field.color : "#FFF"
                            }
                            fontColor={!(field.type === info.type) ? field.color : "#FFF"}
                            borderColor={field.color}
                            onPress={() => {
                                getBet(field.type);
                            }}
                        >
                            <Text
                                style={{fontWeight:'bold', color: !(field.type === info.type) ? field.color : "#FFF" }}>
                                {field.type}
                            </Text>
                        </GameOption>
                    );
                })}</GameOptions>


                {numbers.length == [] &&
                    <><Text>
                        Fill your bet
                    </Text><Text>
                            {info.description}
                        </Text></>}


                <Balls>{numbers.map((field, index) => {
                    console.log(index)
                    console.log(field)
                    return (
                        <BallsList
                        key={index}
                        color={info.color}
                        onPress={() => selectedNumbersRemove(field)}
                    >
                        <Text style={{color:'#FFF',top:-1, right:9, position:'absolute'}}>
                            x
                        </Text>
                        <Text style={{color:'#FFF', fontWeight:'bold'}}>
                        {field < 10 ? `0${field}` : field}
                            </Text>
                        </BallsList>
                    );
                })}</Balls>


                {numbers.length >= 1 && <BetButtons>
                    <BetButton onPress={handleCompleteBet}>
                        <TextButton> Complete game</TextButton>
                    </BetButton>
                    <BetButton onPress={clearNumbers}>
                        <TextButton>

                            Clear game

                        </TextButton>
                    </BetButton>
                    <AddToCart
                        background={
                            numbers.length === info["max_number"]
                                ? "#98a501"
                                : "#B5C401"
                        }
                        onPress={
                            numbers.length === info["max_number"]
                                ? () => addCart(handleNewBet())
                                : null
                        }
                    >

                        <TextButton style={{ color: 'white' }}>
                            <MaterialCommunityIcons name="cart-outline" size={20} color="#ffffff" />
                            Add to cart
                        </TextButton>
                    </AddToCart>
                </BetButtons>}







                <Balls>{Array.from(Array(info.range).keys()).map((field, index) => {
                    return (
                        <Ball
                            key={index}
                            color={numbers.includes(index + 1) ? info.color : "#ADC0C4"}
                            onPress={() => selectedNumbers(index + 1)}
                        >
                            <Text style={{color:'#FFF', fontWeight:'bold'}}>
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </Text>
                        </Ball>
                    );
                })}</Balls>

            </Container>
            <Modal style={{ zIndex: 1 }} transparent={true} visible={isModalOpen}>
                <Cart setModalOpen={setModalOpen} value={cartValue} />
            </Modal>
        </>
    )
}

