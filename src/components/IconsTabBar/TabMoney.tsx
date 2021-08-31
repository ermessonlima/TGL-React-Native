import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function index() {
    return (
        <View style={style.container}>
            <View style={style.cicle}>
                <View style={style.miniCicle}>
                    <MaterialIcons name="attach-money" size={24} color="white" />
                    <Feather
                        style={{borderRadius:12 , position: 'absolute', bottom:-10, right:-10, backgroundColor: '#B5C300', }}
                        name="plus-circle" size={24} color="white" />
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        zIndex:50,
        width: 86,
        height: 86,
        backgroundColor: '#B5C300',
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 5,
        borderColor: '#FFF',
        elevation: 5,
        color: '#FFF'
    },
    cicle: {
         zIndex:50,
        width: 48,
        height: 48,
        backgroundColor: '#B5C300',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        elevation: 5,
        color: '#FFF'
    },
    miniCicle: {
        zIndex:50,
        width: 36,
        height: 36,
        backgroundColor: '#B5C300',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        elevation: 5,
        color: '#FFF'
    }
})