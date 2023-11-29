import styled from "styled-components/native";

export const BoxLogin = styled.View`
        display: inline-block;
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
        color: ${({ theme }) => theme.COLOR.WHITE };
`;

export const BoxButton = styled.View`
        flex-direction: row;
        gap: 40px;
        padding: 30px;

`;

export const ButtonMesa = styled.View`
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        border-radius: 20px;
        width: 130px;
        height: 50px;
        align-items: center;
        justify-content: center;

`;
export const MesaText = styled.Text`
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 30px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };

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
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 30px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };
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