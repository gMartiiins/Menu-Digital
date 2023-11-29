import styled from "styled-components/native";

export const Container = styled.View`
        flex: 1;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        padding-Top: 20px;
        align-items: center;
`;

export const BoxLogo = styled.View`
        align-Items: center; 
        padding: 100px 0 100px 0;
        width: 100%;      
`;

export const LogoImg = styled.Image`      
        width: 600px;
        height: 300px;
`;

export const Separacao = styled.View`
        height: 40px;
`;


export const BoxRestaurant = styled.View`
        height: 90px;
        width: 550px;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_800 };
        border: solid 4px ${({ theme }) => theme.BACKGROUND.WHITE };
        justify-content: center;
        align-Items: center; 
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
`;

export const RestaurantText = styled.Text`    
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 65px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };;

`;

export const BoxConsumer = styled.View`
        height: 90px;
        width: 550px;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_800 };
        border: solid 4px ${({ theme }) => theme.BACKGROUND.WHITE };
        justify-content: center;
        align-Items: center; 
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
`;


export const ConsumerText = styled.Text`          
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 65px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };

`;


export const BVoltar = styled.View`
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        width: 120px;    
`;

export const BVoltarText = styled.Text` 
        color: ${({ theme }) => theme.COLOR.WHITE };
        font-size: 30px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.LILITAONE };
`;