import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`      
        flex: 1;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };          
`;

export const BoxHeader = styled.View`
        flex-direction: row;
        width: 100%;   
        padding-Top: 40px;
        padding-bottom: 20px;
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_800};
        padding-left: 30px;
        align-items: center;    
`;

export const BoxTitulo = styled.View`    
        height: 200px;
        width: 450px;
        margin-left: 30px;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700};
        border-radius: 10px;
`;

export const Titulo = styled.Text`
        font-size: 70px;
        color:${({ theme }) => theme.COLOR.WHITE};
        text-align: center;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};       
`;


export const LogoImg = styled.Image`    
        height: 150px;
        width: 350px;    
`;

export const BoxPedidosSituação = styled.View`
        flex-direction: row;
        height: 50px;
        width: 100%;
        background-color: #1b563f;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px 0 30px;
        margin-bottom: 10px;
        border-radius: 10px 10px 0 0;
`;

export const PedidosFeitos = styled.Text`
        font-size: 30px;
        color:${({ theme }) => theme.COLOR.WHITE};
        text-align: center;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};
`

export const BoxPedidos = styled.View`
        flex-direction: row;
        padding-left: 340px;
        padding-right: 45px;
        width: 100%;
        height: 90px;
        justify-content: space-between;
        align-items: center;              
`;

 export const Pedidos = styled.Text`
        font-size: 50px;
        color: white;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};  
 `;

export const Situacao = styled.Text`
        font-size: 30px;
        color: white;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};
`;
export const BoxDown = styled.View`
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_700};
        flex-direction:row;
        padding-right: 15px;
        align-items: center;     
`;

export const BoxPedidosRealizados = styled.View`     
        width: 610px;
        height: 860px;
        background-color: ${({ theme }) => theme.BACKGROUND.PURPLE_800};
        border-radius: 15px;
        padding: 8px;
        
`;

export const BoxBackButton = styled.View` 
        position: absolute; 
        padding-bottom: 60px;
        padding-left: 10px;
`;

export const BackButton = styled.TouchableOpacity`
             
`;

export const ListaVazia = styled.Text`
        font-size: 30px;
        color: white;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE};
`;
export const BoxListaVazia = styled.View`
        justify-content: center;
        align-items: center;
       width: 100%;
       height: 725px;
      
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({ 
        size: 70,
        color: theme.COLOR.WHITE    
   }))`
    
   `;

