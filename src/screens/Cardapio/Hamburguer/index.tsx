import { TouchableOpacity, Alert } from 'react-native';
import { Burger, NumberBox, BurgerImg, Number, TextBox, BurgerName, Descricao, ValorBox, Valor, Mesas, Indisponivel, TextIndisponivel} from './styles';
import { ImageOne } from '../../../components/ImagesCardapio';
import { useCart } from '../../../context/useCart';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
    mesa1: string;
    numero: string;
    burgerName: string;
    descricao: string;
    valoritem: number;
    showAlert: boolean;
    showAlert2: boolean; 
    imagem: React.ReactNode;
}

export function Hamburguer({ mesa1, numero, burgerName, descricao, valoritem, showAlert, showAlert2, imagem }: Props) {
  
  const [indisponivelVisible, setIndisponivelVisible] = useState(false);
    
    const PedidoConfirmado = () => {
        
        Alert.alert(
            'Pedidos Realizado',
            `Seu pedido Foi Realizado com Sucesso`,
            );
};
     
const ConfirmarPedido = () => {
if (!indisponivelVisible) {
  if (showAlert) {
      Alert.alert(
          'Confirmar Pedido',
          `Deseja realizar o pedido do numero ${numero}?`,
          [
              { text: 'Não', style: 'cancel' },
              {
                  text: 'Sim', onPress: () => {
                      adicionarAoCarrinho({
                          numero: numero,
                          name: burgerName,
                          mesa: mesa1,
                          valoritem: valoritem,
                      });
                      PedidoConfirmado();
                  },
              }
          ],
      );
    }
  };
};
    
const loadIndisponivelVisibility = async () => {
  try {
    const storedVisibility = await AsyncStorage.getItem(`indisponivelVisibility_${numero}`);
    if (storedVisibility !== null) {
      setIndisponivelVisible(JSON.parse(storedVisibility));
    }
  } catch (error) {
    console.error(`Error loading indisponivelVisibility_${numero} from AsyncStorage:`, error);
  }
};

useEffect(() => {
  loadIndisponivelVisibility();
}, []);

const saveIndisponivelVisibility = async (visibility: boolean) => {
  try {
    await AsyncStorage.setItem(`indisponivelVisibility_${numero}`, JSON.stringify(visibility));
  } catch (error) {
    console.error(`Error saving indisponivelVisibility_${numero} to AsyncStorage:`, error);
  }
};

const PedidoIndisponivel = () => {
  if (showAlert2) {
    Alert.alert(
      'Pedido Indisponível',
      'O pedido está indisponível?',
      [
        {
          text: 'Sim',
          onPress: async () => {
            setIndisponivelVisible(true);
            await saveIndisponivelVisibility(true);
          },
        },
        {
          text: 'Não',
          onPress: async () => {
            setIndisponivelVisible(false);
            await saveIndisponivelVisibility(false);
          },
        },
      ],
    );
  }
};
  
    

const cartContext = useCart();

const adicionarAoCarrinho = (pedido: any) => {
cartContext.adicionarAoCarrinho(pedido);

};

  return (
    
    <>       
      <TouchableOpacity onPress={()=>{ConfirmarPedido(), PedidoIndisponivel()}}>     
          <Burger>
                <BurgerImg>
                    <NumberBox>
                        <Number>
                            {numero}
                        </Number>
                    </NumberBox>
                    {imagem}
                </BurgerImg>
                
                <TextBox>
                    <BurgerName>
                        {burgerName}
                    </BurgerName>

                    <Descricao>
                        {descricao}
                    </Descricao>
                </TextBox>
                
                <ValorBox>
                  <Mesas>
                      {mesa1}
                  </Mesas>
                  <Valor>
                    R${valoritem.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Valor>
                    
                </ValorBox>
                
          </Burger>

          {indisponivelVisible && (
            <Indisponivel>
              <TextIndisponivel>
                Produto Indisponivel
              </TextIndisponivel>
            </Indisponivel>
          )}
          </TouchableOpacity>
    </>
  );
}

