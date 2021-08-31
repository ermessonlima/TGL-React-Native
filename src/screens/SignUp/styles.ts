import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size:44px;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const Line = styled.View`
    height: 8px;
    width:105px ;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.text_secondary};
`;

export const TextFooter = styled.Text`
bottom: 0;
font-size: 15px;
margin-bottom: 15px;
position: absolute;
`;