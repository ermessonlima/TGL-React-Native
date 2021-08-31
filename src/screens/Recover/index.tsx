import React from 'react'
import { Container, Line, Title,TextFooter } from "./styles";
import Recover from '../../components/Authentication/recoverPassword'

export default function SignUp() {
    return (
        <Container >
                <Title>
                    TGL
                </Title>
                <Line />
                <Recover />
                <TextFooter>
                Copyright 2020 Luby Software
            </TextFooter>
            </Container>
    )
}

