import { Container, BoxBackButton, BackButton, BackIcon, BoxHeader, LogoImg, BoxTitulo, Titulo, BoxPedidos, Pedidos, Situacao, BoxDown,  BoxPedidosRealizados, PedidosFeitos, BoxPedidosSituação, ListaVazia, BoxListaVazia } from './styles';
import  myburger from '../../../assets/myburger.png';
import { ServicoMesa } from '../../components/ServicoMesa';
import React, { useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { PedidoRealizado } from '../../components/PedidoRealizado';
import { useNavigation } from "@react-navigation/native"
import { useCart } from '../../context/useCart';
import { ButtomApagar } from '../../components/ButtomApagar';
import { PedidoMesaRealizado } from '../../components/PedidoMesaRealizado';

type Props = {
  showBackButton?: boolean;
};

export function Restaurant({ showBackButton = true }: Props) {
  const cartContext = useCart();
  const items = cartContext.items;

  const [opcoes, setOpcoes] = useState('Serviço');
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
 
  function navigateMenu(){
   navigation.navigate('mesaprincipal');
  
  }

  return (
    <Container>

      <BoxHeader>
        <LogoImg source={myburger} />
        {showBackButton && (
          <BoxBackButton>
            <BackButton onPress={handleGoBack}>
              <BackIcon />
            </BackButton>
          </BoxBackButton>
        )}

        <TouchableOpacity onPress={navigateMenu}>
          <BoxTitulo>
            <Titulo>
              CARDÁPIO RESTAURANTE
            </Titulo>
          </BoxTitulo>
        </TouchableOpacity>

      </BoxHeader>
    
      <BoxPedidos>
        <Pedidos>
          PEDIDOS REALIZADOS
        </Pedidos>
      </BoxPedidos>

      <BoxDown> 
        <FlatList
          data={['Serviço', 'Mesas']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <ServicoMesa
                title={item}
                isActive={item === opcoes}
                onPress={() => setOpcoes(item)}
              />
           </>
          )} 
        />
        <BoxPedidosRealizados>
        
        {opcoes === 'Serviço' && (
          <BoxPedidosSituação>
            <PedidosFeitos>
                Pedidos
            </PedidosFeitos>
            <PedidosFeitos>
                Situção
            </PedidosFeitos>
          </BoxPedidosSituação>
         )}

          <ScrollView>
          {items.length === 0 && opcoes === 'Serviço' ? (
              <BoxListaVazia>
                <ListaVazia>
                  Nenhum Pedido Realizado
                </ListaVazia>
              </BoxListaVazia>
            ) : (
              <>
                {opcoes === 'Serviço' && (
                  items.map((pedido) => (
                    <PedidoRealizado
                      key={pedido.id}
                      id={pedido.id}
                      numero={pedido.numero}
                      name={pedido.name}
                      mesa={pedido.mesa}
                      valoritem={pedido.valoritem}
                    />
                  ))
                )}
                {opcoes === 'Mesas' && (
                  <PedidoMesaRealizado
                    mesaum="MESA 1"
                    mesadois="MESA 2"
                    mesatres="MESA 3"
                  />
                )}
              </>
            )}
          </ScrollView>
          
          {opcoes === 'Serviço' && <ButtomApagar />}
        
        </BoxPedidosRealizados>
      </BoxDown>
      
    </Container>
  );
}