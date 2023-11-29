
import { Alert, TouchableWithoutFeedback } from 'react-native';
import { useCart } from '../../context/useCart';
import { ButtonDelete } from '../ButtonDelete';
import { Container, BoxNameMesaValor, BoxNumberBurger, NumberBurger, BoxBurgerName, BurgerName, BoxMesaValor, BoxNumberMesa, NumberMesa, BoxValor, Valor, BoxSituacao} from './styles';
import { ButtonSituacao } from '../ButtonSituacao';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type PedidosProps = {
    id: string;
    numero: string;
    name: string;
    mesa: string;
    valoritem: number;
}

export function PedidoRealizado({ id, numero, name, mesa, valoritem }: PedidosProps) {
    
    const cartContext = useCart();
    const [corBotao, setCorBotao] = useState<'vermelho' | 'amarelo' | 'verde'>('vermelho');
  
    const carregarCorBotao = async () => {
        try {
          const corArmazenada = await AsyncStorage.getItem(`corBotao-${id}`);
          if (corArmazenada) {
            setCorBotao(corArmazenada as 'vermelho' | 'amarelo' | 'verde');
          }
        } catch (error) {
          console.error('Erro ao carregar a cor do botão do AsyncStorage:', error);
        }
      };
      useEffect(() => {
        carregarCorBotao();
      }, [cartContext.items, id]);
    
    const handleRemoverDoCarrinho = () => {
      Alert.alert(
        'Confirmação',
        'Você realmente deseja apagar este pedido?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Apagar',
            onPress: () => {
              cartContext.removerDoCarrinho(id);
            },
          },
        ],
        { cancelable: false }
      );
    };
  
    const handleMudarCorBotao = () => {
        let novaCor: 'vermelho' | 'amarelo' | 'verde';
      
        if (corBotao === 'vermelho') {
          novaCor = 'amarelo';
        } else if (corBotao === 'amarelo') {
          novaCor = 'verde';
        } else {
          novaCor = 'vermelho';
        }
      
        setCorBotao(novaCor);
    
        AsyncStorage.setItem(`corBotao-${id}`, novaCor);
      };
  
      const [isButtonEnabled, setButtonEnabled] = useState(false);

      const handleItemClick = () => {
        setButtonEnabled(!isButtonEnabled);
      };

    return ( 
      <TouchableWithoutFeedback onPress={handleItemClick}>
        <Container >
          
            <BoxNumberBurger >           
                <NumberBurger>
                    { numero }
                </NumberBurger>
            </BoxNumberBurger>
          
            <BoxNameMesaValor>
                <BoxBurgerName>
                    <BurgerName>
                        { name }
                    </BurgerName>
                </BoxBurgerName>

                <BoxMesaValor>
                    <BoxNumberMesa>
                      <NumberMesa>
                          { mesa }
                      </NumberMesa>
                    </BoxNumberMesa>

                    <BoxValor>
                        <Valor>
                          R${valoritem.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Valor>    
                    </BoxValor>         
                </BoxMesaValor>
                    
            </BoxNameMesaValor>

                <BoxSituacao style={isButtonEnabled ? {} : { justifyContent: 'center' }}>
                  <ButtonSituacao cor={corBotao} onPress={handleMudarCorBotao}  />
                  <ButtonDelete onPress={handleRemoverDoCarrinho} hidden={!isButtonEnabled} />
                </BoxSituacao>
                
        </Container>
      </TouchableWithoutFeedback>
      
);
};
