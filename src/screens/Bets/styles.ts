import styled from "styled-components/native";

export const Container =  styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false,
    contentContainerStyle: {paddingHorizontal: 0}
})`
    padding: 10px;
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
    margin:  5px 0;
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

export const TextButton = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color:#B5C401;
`;

export const GameOptions = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle: {paddingHorizontal: 0}
})`
  max-height: 50px;
`;

export const GameOption = styled.TouchableOpacity<any>`
    margin:5px;
    height: 35px;
    min-width: 60px;
    padding: 6px 20px;
    border-radius: 30px;
    border: 2px solid;
    font-size: 14px;
    font-weight: bold;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.fontColor};
    border-color: ${(props) => props.borderColor};
`;

export const Balls = styled.View`
   flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const BallsList = styled.TouchableOpacity<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 20px;
    margin-right: 12px;
    margin-bottom: 5px;
    font-size: 20px;
`;
export const Ball = styled.TouchableOpacity<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    color: #fff;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 50px;
    margin-right: 12px;
    margin-bottom: 20px;
    font-size: 20px;
    margin-top: -15px;
`;

export const BetButtons = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 35px;
    margin-top: -5px;
`;

export const BetButton = styled.TouchableOpacity<any>`
    padding: 10px 10px;
    border: 1px solid #B5C401;
    border-radius: 10px;
    background-color: transparent;
    margin-right: 5px;
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const AddToCart = styled.TouchableOpacity<any>`
    flex-direction: row;
    flex:1;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    align-items: center;
    padding: 10px 10px;
    color: #fff;
    border-radius: 10px;
    background-color: ${(props) => props.background};
`;

export const Loading = styled.View`
justify-content: center;
flex:1;
align-items: center;
background-color: 'rgba(255,255,255,0.8)';
`;