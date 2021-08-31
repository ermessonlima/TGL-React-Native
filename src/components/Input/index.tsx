import React, {useState} from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { Container, TextInput } from './styles'
import { FontAwesome } from '@expo/vector-icons'; 

interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
    secureTextEntry?: boolean
}



export default function Input({name,icon,secureTextEntry, ...rest}:InputProps) {

    const mudarText =() =>{
        setSecureText(!secureText)
    }
    const [secureText, setSecureText ] = useState(false)
    
    return (
<Container>
    <TextInput 
    secureTextEntry={secureText}
    {...rest}/>
   {icon && 
   <TouchableOpacity onPress={mudarText}>
  <FontAwesome name="eye" size={24} color="#C1C1C1" />
   
   </TouchableOpacity>
 
 
   }
</Container>
    )

};
