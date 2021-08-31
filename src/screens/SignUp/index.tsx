import React from 'react'
import { Container, Line, Title,TextFooter } from "./styles";
import Register from '../../components/Authentication/register'

export default function SignUp() {
    return (
        <Container >
                <Title>
                    TGL
                </Title>
                <Line />
                <Register />
                <TextFooter>
                Copyright 2020 Luby Software
            </TextFooter>
            </Container>
    )
}

