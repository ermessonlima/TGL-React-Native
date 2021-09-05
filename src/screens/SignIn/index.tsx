// @ts-ignore
import ImageA from '../../../assets/splash.png'
import React, { useEffect, useState } from 'react'
import { View, Modal, Image, StyleSheet } from 'react-native'
import { Container, Line, Title, TextFooter } from "./styles";
import Authentication from '../../components/Authentication/auth'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, runOnJS } from 'react-native-reanimated'

export default function SignIn() {

    const [loading, setLoading] = useState(true)
    const splashAnimation = useSharedValue(-430);

    const brandStyle = useAnimatedStyle(() => {
        return {
            bottom: interpolate(splashAnimation.value,
                [-430, 0],
                [-430, 800]),
        }
    });

    function startApp() {
        setLoading(false)
    }
    useEffect(() => {
        splashAnimation.value = withTiming(
            0,
            { duration: 4000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, [])


    return (
        <Container >
            {loading == true && <Modal visible transparent>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                    <Animated.View style={brandStyle}>
                        <Image source={ImageA} style={styles.stretch} />
                    </Animated.View>
                </View>
            </Modal>}
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

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
});
