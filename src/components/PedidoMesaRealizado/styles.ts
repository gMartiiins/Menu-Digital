import styled, { css } from 'styled-components/native'


export const Container = styled.View`      
`;

export const BoxMesa = styled.View`
      height: 100px;
      width: 100%;
      border-radius:  10px 10px 0 0 ;
      background-color: #312b81;
      align-items: center;
      justify-content: center;
      border-bottom-width: 8px;
      border-color: #464188;     
`

export const MesaName = styled.Text`

${({ theme }) => css`
            font-family: ${theme.FONT_FAMILY.LILITAONE};
            color: ${theme.COLOR.WHITE};;
      `};
            font-Size: 50px;
`;

export const BoxMesaPedidos = styled.View`
      margin-top: 15px;
      margin-bottom: 30px;         
`;


export const BoxPedidoMesa = styled.View`
      padding-left: 6px;
      padding-right: 6px;
      border-right-width: 8px;
      border-left-width: 8px;
      background-color: #312b81;
      align-items: center;
      justify-content: center;
      border-color: #312b81;
      padding-top: 15px;
      padding-bottom: 6px;
     

`;

export const BoxPedidoMesaItens = styled.View`
      background-color: blue;
`;


export const BoxDownValor = styled.View`  
      height: 70px;
      width: 100%;  
      background-color: #312b81;
      align-items: center;
      justify-content: center;
      border-radius:   0 0 10px 10px; 
      border-top-width: 8px;
      border-color: #464188;
`;

export const BoxValorTotal = styled.View`
      height: 45px;
      width: 500px;
      border-radius: 10px;
      background-color: red;
      align-items: center;
      justify-content: center;
      

`;

export const ValorTotal = styled.Text`

${({ theme }) => css`
            font-family: ${theme.FONT_FAMILY.LILITAONE};
            color: ${theme.COLOR.WHITE};;
      `};
            font-Size: 35px;
`;
