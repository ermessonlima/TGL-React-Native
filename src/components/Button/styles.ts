import styled from "styled-components/native";

interface IconProps {
    color: string;
    fontSize: string;
}

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const ButtonText = styled.Text<IconProps>`
    font-size: ${(props) => props.fontSize};
    font-weight: bold;
    font-style: italic;
    color: ${(props) => props.color}

`;