import styled from "styled-components/native";


export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size:35px;
    font-weight: bold;
    font-style: italic;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const Form = styled.View`

    elevation: 1;
    height: 293px;
    width:306px ;
    margin-top: 26px;
    background-color: #FFF;
    border-radius: 10px;
    
`;

export const FormRecover = styled.View`
    height: 143px;
    width:306px ;
    elevation: 1;
    margin-top: 26px;
    background-color: #FFF;
    border-radius: 10px;
`;

export const RecoverButton = styled.Button`
`;
export const ContentRight = styled.View`

    margin: 25px ;
    align-items: flex-end;
`;

export const SubmitButton = styled.Button`

`;

export const HandleButton = styled.Button`

`;
