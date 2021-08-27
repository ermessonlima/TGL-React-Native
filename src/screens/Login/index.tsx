import React from 'react'
import { Container, Line, Title } from "./styles";
import Authentication from '../../components/Authentication/auth'

export default function Login() {
    return (
        <Container>
                <Title>
                    TGL
                </Title>
                <Line />
                <Authentication />
            </Container>
    )
}

