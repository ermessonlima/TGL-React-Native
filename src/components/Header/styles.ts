import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
     height: 103px;

    justify-content:space-between;
    align-items: center;
    
    padding: 15px 10px 0px 10px;

    background-color: #FFF;
`;

export const TglLogo = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size:36px;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text_primary};
`;

export const Line = styled.View`
    height: 6px;
    width:80px ;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.text_secondary};
`;

export const IconsSection = styled.View`
    flex-direction: row;
    width:90px ;
    justify-content:flex-end;
   
`;

