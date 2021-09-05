import styled, {css} from "styled-components/native";

export const Container = styled.View<any>`
  width: 100%;
    ${(props) => props.error && css`border-bottom-width: 5px;
    border-color: #c53030;
    `}
`;

export const Error = styled.Text<any>`
    color: #c53030;
    font-size: 16px;
    margin-top:5px;
    margin-bottom:-25px;
    margin-left: 10px;

`;

