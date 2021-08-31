import React from 'react'
import { Container, Line, Title, IconsSection, TglLogo } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";



export default function Header({ view, setModalOpen }: any) {

    const navigation = useNavigation();

    const handleExit = () => {
        navigation.navigate('SignIn')
    }


    return (
        <Container >
            <TglLogo>
                <Button fontSize={'30px'}
                    color="#B5C401"
                    onPress={() => { '' }}>
                    <Title>
                        TGL
                    </Title>
                </Button>
                <Line />
            </TglLogo>
            <IconsSection>
                
                {
                    view && <Button fontSize={'30px'}
                        style={{ marginRight: 20 }}
                        color="#B5C401"
                        onPress={()=>setModalOpen(true)}>
                        <MaterialCommunityIcons name="cart-outline" size={35} color="#B5C401" />
                    </Button>
                }
                <Button fontSize={'30px'}
                    color="#B5C401"
                    onPress={handleExit}>
                    <Ionicons name="exit-outline" size={35} color="#C1C1C1" />
                </Button>
            </IconsSection>
        </Container>
    )
}

