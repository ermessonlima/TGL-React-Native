import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    padding:10px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size:22px;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const SubTitle = styled.Text`
    font-size:17px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const GameButton = styled.TouchableOpacity<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 2px solid;
    padding: 9px 27px;
    min-width: 34px;
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.borderColor};
`;

export const Content = styled.View`
    display: flex;
    flex-direction: row;
`;

export const GamesContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 25px 0; 
`;

export const Game = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 25px;
    margin-right: 15px;
    color: #868686;
`;

export const Line = styled.View<any>`
    width: 6px;
    height: 85px;
    background-color: ${(props) => props.color};
    border-radius: 100px;
    margin-right: 15px;
`;

export const TextColor = styled.Text<any>`
    font-size:22px;
    font-weight: bold;
    font-style: italic;
    color:  ${(props) => props.color};
`;
export const Loading = styled.View`
justify-content: center;
flex:1;
align-items: center;
background-color: 'rgba(255,255,255,0.8)';
`;

export const PageContainer = styled.View`
  flex-direction: row;
  justify-content:space-around ;
  align-items: center;
  margin-bottom: -5px;
`;

export const ButtonOrder = styled.TouchableOpacity<any>`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid;
    padding: 5px 10px;
    min-width: 34px;
    margin: 5px;
    background-color:#fff;
    border-color:#000;
`;

export const ButtonAvanc = styled.TouchableOpacity<any>`
   justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid;
    padding: 5px 1px;
    min-width: 5px;
    margin: 5px 1px;
    background-color:#fff;
    border-color:#B5C401;
`;

export const TextButtonPage = styled.Text<any>`
    font-size:14px;
    font-weight: bold;
    font-style: italic;
    color: #B5C401;
`;

export const TextNumbers = styled.Text<any>`
    font-size:14px;
    font-weight: bold;
    font-style: italic;
    color: #868686;
`;
