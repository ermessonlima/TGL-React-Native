import React from 'react'
import { Container, ButtonText  } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    children: any;
    color?:any;
    fontSize:string;
    backgroundColor?: any;
}

const Button: React.FC<ButtonProps> = ({backgroundColor,fontSize, color, children, ...rest}) =>{
  return (
  <Container style={{backgroundColor:backgroundColor }} {...rest}>
      <ButtonText fontSize={fontSize} color={color} >{children}</ButtonText>  
  </Container>
)}
export default Button;