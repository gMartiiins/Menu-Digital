import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
        flex: 1;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_700 };
        padding-Top: 20px;
        align-Items: center; 
`;
export const LogoBox = styled.View`
        width: 100%;
        align-items: center;
        justify-content: center;    
`;

export const LogoImg = styled.Image`
      height: 200px;
      width: 400px;
`;
export const BoxMesa1 = styled.View`
        width: 100px;
        height: 50px;
        position: absolute;
        padding-right: 800px;
        margin-top: 180px;
        align-items: flex-end;
        justify-content: center;
`;
export const Mesa1 = styled.Text`
        position: absolute;
        color: ${({ theme }) => theme.COLOR.WHITE};
        font-weight: bold;
        font-Size: 30px;
`;

export const PratosBox = styled.View`
        height: 120px;
        width: 100%;
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_800};;
        justify-Content: space-between;
        align-Items: center;
        margin-Bottom: 20px;
        margin-Top: 10px;
        border-top-width: 4px;
        border-bottom-width: 4px;
        border-Color: ${({ theme }) => theme.BORDER.WHITE};
`;
export const BurgerText = styled.Text`
        color: ${({ theme }) => theme.COLOR.WHITE};
        font-Size: 60px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.PERMANENTMARKER};
`;
export const Frase = styled.Text`
        color: ${({ theme }) => theme.COLOR.WHITE};
        font-Size: 16px;
        margin-top: -5px;
        margin-bottom: 10px;
`;
export const BurguersBox = styled.View`
        background-Color: ${({ theme }) => theme.BACKGROUND.PURPLE_800};
        height: 830px;white-space: inherit;
        width: 850px;
        border-Radius: 20px;
`;


export const BoxBackButton = styled.View`
        position: absolute;
        padding-right: 750px; 
`;

export const BackButton = styled.TouchableOpacity`         
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({     
        size: 100,
        color: theme.COLOR.WHITE,  
   }))``;