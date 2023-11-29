import { Alert, TouchableOpacity } from 'react-native';
import { Container, TitleButtom } from './styles';
import { useCart } from '../../context/useCart';

export function ButtomApagar(){
    
const cartContext = useCart();
    
const handleLimparPedidos = () => {
    cartContext.limparPedidos();
    Alert.alert('Pedidos apagados');
};

const showConfirmationAlert = () => {
    
    if (cartContext.items.length === 0) {
        Alert.alert('Nenhum Pedido Realizado', 'Nenhum pedido foi feito até o momento');
    }
        else if(cartContext.items.length !== 0){
            Alert.alert(
                'Confirmação',
                'Tem certeza que deseja apagar os pedidos?',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Apagar', onPress: () => handleLimparPedidos() },
                ],
                { cancelable: true }
                );
            };     
    };
           
    return ( 
        <TouchableOpacity onPress={()=>{showConfirmationAlert()}}>
        <Container>
            <TitleButtom>
                APAGAR PEDIDOS REALIZADOS
            </TitleButtom>
        </Container>
        </TouchableOpacity>
   );
}