import { TouchableOpacityProps } from 'react-native';
import {   BoxSwitchServico, Title, FilterStyleProps } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}
   
export function ServicoMesa({ title, isActive = false, ...rest}: Props){
    
    return(
 
        <BoxSwitchServico 
        isActive={isActive}
        {...rest}
        >
            <Title >
                { title }
            </Title>
        </BoxSwitchServico>

    );
}