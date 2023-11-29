import styled, { css } from "styled-components/native";


export const BoxLogin = styled.View`
        width: 550px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left-width: 4px;
        border-right-width: 4px;
        border-bottom-Width: 4px;
        border: white;
        align-items: center;
        background-color: ${({ theme }) => theme.COLOR.PURPLE_800};
`;

export const BoxText1 = styled.View`
        margin-top: 30px;
        height: 50px;
        width: 250px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        align-items: center;
        justify-content: center;
`;

export const TextInput1 = styled.Text`
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 30px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };
`;

export const BoxInput1 = styled.View`
        height: 50px;
        width: 350px;
        border-radius: 20px;
        background-color: 'rgba(142, 162, 170, 0.3)';
        border: 3px solid ${({ theme }) => theme.COLOR.WHITE }; 
        align-items: center;
        justify-content: center;
`;

export const Input1 = styled.TextInput`
        text-align: center;
        font-size: 30px;
        color:  ${({ theme }) => theme.COLOR.WHITE };      
`;

export const BoxButtons = styled.View`
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
`;


export const Button = styled.View`
        margin: 25px 0;
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        border-radius: 20px;
        width: 130px;
        height: 50px;
        align-items: center;
        justify-content: center;
`;

export const ButtonText = styled.Text`
        ${({ theme }) => css`
        color: ${theme.COLOR.WHITE};
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        `};
        font-size: 30px;
`;


export const BoxText2 = styled.View`
        margin-top: 30px;
        height: 50px;
        width: 250px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        align-items: center;
        justify-content: center;
`;

export const TextInput2 = styled.Text`
        ${({ theme }) => css`
        color: ${theme.COLOR.WHITE};
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        `};
        font-size: 30px;
       
`;

export const BoxInput2 = styled.View`
        height: 50px;
        width: 350px;
        border-radius: 20px;
        background-color: 'rgba(142, 162, 170, 0.3)';
        border: 3px solid ${({ theme }) => theme.COLOR.WHITE };; 
        align-items: center;
        justify-content: center;
`;

export const Input2 = styled.TextInput`
        text-align: center;
        font-size: 30px;
        color: ${({ theme }) => theme.COLOR.WHITE };
        
`;