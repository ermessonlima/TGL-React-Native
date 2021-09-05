import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    z-index: 1;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: 'rgba(255,255,255,0.8)';
    margin-bottom: 70px;
    
`;
export const Content = styled.View`
    flex:1;
    z-index: 1;
    width:265px;
  elevation:1;
    background-color: #FFF;
  
`;

export const BoxExit = styled.View`
   flex-direction: row;
   justify-content: flex-end;
    align-items: center;
    margin-right:15px;
`;


export const Title = styled.Text`
    font-size:25px;
    margin-left: 10px;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const BetsList = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const BetInfo = styled.View<any>`
    margin-left: 10px;
    width: 240px;
    padding-left: 10px; 
`;


export const Box = styled.View`
margin-left: 10px;
   flex-direction: row;
   justify-content: flex-start;
    align-items: center;
`;


export const Subtitle = styled.Text<any>`
    font-size:14px;
    margin-left: 10px;
`;

export const TextType = styled.Text<any>`
    font-size:16px;
    font-weight: bold;
    font-style: italic;
   
`;

export const TextNumbers = styled.Text<any>`
    font-size:12px;
    font-weight: bold;
    font-style: italic;
   color:#868686;

`;

export const Line = styled.View<any>`
  
        width: 6px;
        height: 100%;
        border-radius: 10px;
        margin-left: 10px;
        margin-right: -10px;
`;

export const Loading = styled.View`
justify-content: center;
flex:1;
align-items: center;
background-color: 'rgba(255,255,255,0.8)';
`;
//ermessonlimadossantos@hotmail.com