import styled, { css } from "styled-components/native";

export const BoxSwitchServico =  styled.View`
  
        ${({ theme}) => css`
        background-color: ${theme.BACKGROUND.PURPLE_800};
        `}
        position:absolute;
        width: 280px;
        height: 130px;
        justify-content: center;
        align-items: center;
        border-top-width: 4px;
        border-color: white;
        border-bottom-width: 4px;
        margin-bottom: 8px;     
`;

export const Title = styled.Text`
    text-transform: uppercase;
 ${({ theme }) =>  css`
    
    font-family: ${theme.FONT_FAMILY.LILITAONE};
    font-size: 60px;
    color: white;
`}
`;
