import React from 'react'
import { Container } from "./styles";
import AccountScreen from '../../components/Authentication/account'
import Header from '../../components/Header'

export default function Account() {
  return (
    <>
      <Header />
      <Container >
        <AccountScreen />
      </Container>
    </>
  )
}

