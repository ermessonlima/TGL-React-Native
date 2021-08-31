import React from 'react'
import { Container, Line, Title,TextFooter,SubTitle } from "./styles";
import Authentication from '../../components/Authentication/auth'
import Header from '../../components/Header'

export default function Home() {
    return (
        <>
           <Header view={false}/>
        <Container >
         
                <Title>
                    RECENT GAMES
                </Title>
                <SubTitle>
                    Filters
                </SubTitle>
       
              
            
            </Container>
            </>
    )
}

