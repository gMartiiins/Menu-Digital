import styled, { css } from "styled-components/native";

export const Burger = styled.View`     
        height: 230px;
        width: 100%;
        flex-direction: row;   
`;

export const Indisponivel = styled.View`
        position: absolute;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.2);
        width: 100%;
        height: 230px;       
        border-Radius: 10px;
`
export const TextIndisponivel = styled.Text`     
        ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.BLACK};
    `};
    text-transform: uppercase;
    font-size: 60px;
`

export const NumberBox = styled.View`
        width: 100%;
        justify-content: flex-start; 
        margin-left: 10px;
        margin-top: 5px;
`;

export const Number = styled.Text`
${({ theme }) => css`
        border-Color: ${theme.BORDER.WHITE};
        color: ${theme.COLOR.WHITE};;
    `};
        height: 45px;
        width: 45px;
        padding-Top: 1px;
        padding-Left: 14px;
        border-Width: 3px;
        border-Radius: 100px;
        position: absolute;
        font-Size: 30px;
        font-Weight: bold;
`;

export const BurgerImg = styled.View`      
        width: 290px;
        align-Items: center;     
`;

export const TextBox = styled.View`
        flex: 1;
        align-Items: center;
        padding-Top: 10px;
        margin-right: 15px;
        margin-left: 5px;      
`;

export const BurgerName = styled.Text`

${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};
    `};
        width: 300px;
        text-align: center;
        font-Size: 35px;
        padding-bottom: 10px;
       
       
`;

export const Descricao = styled.Text`
        text-align: justify;
        font-Size: 16px;
        color: ${({ theme }) => theme.COLOR.WHITE};;
`;

export const ValorBox = styled.View`
        align-items: center;
        justify-content: center;
        border-Left-Width: 2px;
        border-Color: ${({ theme }) => theme.BORDER.WHITE};
`;

export const Valor = styled.Text`
        text-Align: center;
        font-Size: 30px;
        font-Weight: bold;
        width: 150px;
        color: ${({ theme }) => theme.COLOR.WHITE};
`;

export const Mesas = styled.Text`
        display: none;
        color: ${({ theme }) => theme.COLOR.WHITE};
        font-weight: bold;
        font-Size: 30px;
`;


export const ConfirmarPedido = styled.View`
        justify-content: center;
        align-items: center;
`;

export const Box = styled.View`
        height: 150px;
`;

export const Container = styled.View`
       
        height: 230px;
        width: 100%;
        background-color: ${({ theme }) => theme.BACKGROUND.WHITET};
        align-items: center;
        justify-content: center;
        border-Radius: 20px;
        gap: 10px;
`
export const Pergunta = styled.Text`
    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.BLACK};;
    `};
    font-size: 50px;
`;

export const BoxConfirmarRecusar = styled.View`
    gap: 60px;
    flex-direction: row;


`;
export const ConfirmarText = styled.Text`
   
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};;
    `};
    font-size: 50px;
`;

export const Confirmar = styled.View`
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 100px;
    background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700};
    border-Radius: 15px;

`;
export const Recusar = styled.View`
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 100px;
    background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700};
    border-Radius: 15px;

`;
export const RecusarText = styled.Text`
   
   ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};;
    `};
    font-size: 50px;

`;
