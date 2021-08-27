import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
    Title
} from "./styles";

import React from 'react'
import { View, Text } from 'react-native'

const Authentication = () => {


    return (
        <Container>

            <Title>Authentication</Title>

            <Form >
                <Input
                    placeholder="Email"
                />

                <Input
                    placeholder="Passeword"
                />

                <RecoverButton >
                    <Text >  I forgot my password  </ Text>
                </RecoverButton>

                {     /*      <SubmitButton >
                <Text >   Log In </ Text>
                
                </SubmitButton>
*/}
            </Form>

            {/*   <HandleButton  >
                <Text >
                    Sign Up
                 
                </ Text>
         </HandleButton>*/}


        </Container>
    );
};

export default Authentication;
