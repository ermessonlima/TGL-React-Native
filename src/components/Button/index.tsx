import React from 'react'
import { Container, ButtonText  } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    children: any;
    color:any;
    fontSize:string;
}

const Button: React.FC<ButtonProps> = ({fontSize, color, children, ...rest}) =>{
  return (
  <Container  {...rest}>
      <ButtonText fontSize={fontSize} color={color}>{children}</ButtonText>  
  </Container>
)}
export default Button;