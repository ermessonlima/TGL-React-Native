import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 



export default function index({focused,size,color}:any) {
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={{backgroundColor:focused? '#B5C401':  'transparent', height:5, width:35, marginBottom:10, borderRadius:2}}/>
          <FontAwesome name="user-o" size={25} color={focused? '#B5C401': '#C1C1C1'} />
          <Text 
          style={{fontStyle:'italic',
           fontWeight:focused? 'bold': 'normal', 
           color:focused? '#707070': '#C1C1C1'}}>Account</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        
    }
})

//#C1C1C1