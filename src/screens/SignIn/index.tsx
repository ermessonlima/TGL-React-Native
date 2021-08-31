import React from 'react'
import { Container, Line, Title,TextFooter } from "./styles";
import Authentication from '../../components/Authentication/auth'

export default function SignIn() {
    return (
        <Container >
                <Title>
                    TGL
                </Title>
                <Line />
                <Authentication />
                <TextFooter>
                Copyright 2020 Luby Software
            </TextFooter>
            </Container>
    )
}

