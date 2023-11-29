import styled, { css } from 'styled-components/native'


export const Container = styled.View`
      flex-direction: row;
      height: 100px;
      width: 100%;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700};
      align-items: center;
      padding-left: 15px;
      margin-bottom: 8px;
`;


export const BoxBurgerName = styled.View`  
      padding-top: 5px;
      align-items: center;     
`;
export const BoxNameMesaValor = styled.View` 
      height: 100%;
      flex: 3;
      gap: 3px;
`;

export const BoxNumberBurger = styled.View`  
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      border-radius: 50px;
      border: 3px solid ${({ theme }) => theme.COLOR.WHITE};    
`;

export const NumberBurger = styled.Text`
      ${({ theme }) => css`
            font-family: ${theme.FONT_FAMILY.LILITAONE};
            color: ${theme.COLOR.WHITE};;
      `};
            font-Size: 50px;
`;

export const BurgerName = styled.Text`

${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};;
    `};
        text-transform: uppercase;
        font-Size: 30px;
                  
`;

export const BoxNumberMesa = styled.View`
      width: 120px;
      align-items: center;
      padding: 5px;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.COLOR.WHITE};
      
`;

export const NumberMesa = styled.Text` 
      ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};;
    `};       
      text-transform: uppercase;
        font-Size: 30px;

`;

export const BoxMesaValor = styled.View`     
      flex-direction: row;
      justify-content: space-evenly;
`;

export const BoxValor = styled.View`
      width: 140px;
      align-items: center;
      padding: 5px;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.COLOR.WHITE};
      
`;
export const Valor = styled.Text`     
      ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.LILITAONE};
        color: ${theme.COLOR.WHITE};;
    `};  
      text-transform: uppercase;
        font-Size: 30px;

`;

export const BoxSituacao = styled.View`
      flex-direction: row;
      flex: 1;
      align-items: center;
      justify-content: space-between;
`;
