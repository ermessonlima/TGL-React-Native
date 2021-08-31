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

export const Box = styled.View`
margin-left: 10px;
   flex-direction: row;
   justify-content: flex-start;
    align-items: center;
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

export const Line = styled.View`
    height: 8px;
    width:105px ;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.text_secondary};
`;

