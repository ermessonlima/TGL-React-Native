import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ModalError({ errorName, visible, set }: any) {

    function closedModal() {
        set(false)
    }

    return (
        <>
            <Modal visible={visible} transparent
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flex: 1,
                    alignContent: 'center',
                    backgroundColor: 'white',
                    width: '100%',
                    height: 50
                }}>
                <View style={{

                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flex: 1,

                }}>
                    <View style={{
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 350,
                        height: 150,
                        borderRadius: 10,
                        elevation: 5

                    }}>
                        <Text
                            style={{ fontSize: 25, color: '#ff6969', fontWeight: 'bold', position: 'absolute', top: 10 }}>Attention!</Text>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            elevation: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute', top: 5, right: 5
                        }}>
                            <TouchableOpacity
                                onPress={closedModal}>
                                <AntDesign name="closecircleo" size={40} color='#707070' />
                            </TouchableOpacity>
                        </ View>
                        <Ionicons style={{ marginTop: 15 }}
                            name="warning-outline" size={60} color='#707070' />

                        <Text style={{
                            fontWeight: 'bold', fontSize: 18,
                            color: '#707070'
                        }}>{errorName}!</Text>
                    </ View>
                </ View>

            </Modal>
        </>
    )
}
