import styled from "styled-components/native";

export const Container = styled.View`
    height: 70px;
    width: 100%;
    padding:0 26px;
    border-bottom-width: 1px;
    flex-direction: row;
    align-items: center;
    border-color: ${({ theme }) => theme.colors.border};
`;


export const TextInput = styled.TextInput`
    flex:1;
    font-size: 16px;;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.border};
`;

