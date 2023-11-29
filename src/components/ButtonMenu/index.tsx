import { TouchableOpacity } from 'react-native';
import {   BoxSwitchServico, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
}
   
const navigation = useNavigation();

    function NavigateMenu() {
        navigation.navigate('mesaprincipal');
    }

export function ButtonMenu({ title }: Props){
    
    return(    
        <TouchableOpacity onPress={NavigateMenu}> 
            <BoxSwitchServico >
                <Title >
                    { title }
                </Title>
        </BoxSwitchServico>
        </TouchableOpacity>
    );
}