import React from 'react';
import { useState } from 'react';
import { BoxDownValor, BoxMesa, BoxMesaPedidos, BoxPedidoMesa, BoxValorTotal, Container, MesaName, ValorTotal } from './styles';
import { Alert, TouchableOpacity } from 'react-native';
import { useCart } from '../../context/useCart';
import { PedidoRealizado } from '../PedidoRealizado';

type Props = {
  mesaum: string;
  mesadois: string;
  mesatres: string;
};

export interface PedidoRealizado {
    id: string;
    numero: string;
    name: string;
    mesa: string;
    valoritem: number;
  }

export function PedidoMesaRealizado({ mesaum, mesadois, mesatres }: Props) {
 
  const [showPedidoMesa1, setShowPedidoMesa1] = useState(false);
  const [showPedidoMesa2, setShowPedidoMesa2] = useState(false);
  const [showPedidoMesa3, setShowPedidoMesa3] = useState(false);

  const togglePedidoMesa1 = () => {
    setShowPedidoMesa1(!showPedidoMesa1);
  };

  const togglePedidoMesa2 = () => {
    setShowPedidoMesa2(!showPedidoMesa2);
  };

  const togglePedidoMesa3 = () => {
    setShowPedidoMesa3(!showPedidoMesa3);
  };

  const cartContext = useCart();
  const items = cartContext.items;

  const pedidosMesa1 = items.filter((pedido) => pedido.mesa === mesaum);
  const pedidosMesa2 = items.filter((pedido) => pedido.mesa === mesadois);
  const pedidosMesa3 = items.filter((pedido) => pedido.mesa === mesatres);

  const calcularValorTotal = (pedidos: PedidoRealizado[]) => {
    return pedidos.reduce((total, pedido) => total + pedido.valoritem, 0);
  };

  const handleConfirmarPagamento = (mesa: string) => {
    const pedidosMesa = items.filter((pedido) => pedido.mesa === mesa);
  
    if (pedidosMesa.length === 0) {
      Alert.alert("Sem Pedidos", "Nenhum pedido foi realizado nesta mesa.");
      return;
    }
  
    Alert.alert(
      "Confirmação de Pagamento",
      "Deseja confirmar o pagamento?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            cartContext.removerDoCarrinhoByMesa(mesa);

            Alert.alert(
              "Pagamento Confirmado",
              "Pagamento confirmado com sucesso!"
            );
          },
        },
      ]
    );
  };
  
  return (
    <Container>
      <BoxMesaPedidos>
         
         <TouchableOpacity onPress={togglePedidoMesa1}>
            <BoxMesa>
              <MesaName>
                {mesaum}
              </MesaName>
            </BoxMesa>
          </TouchableOpacity>

          {showPedidoMesa1 && (
            <BoxPedidoMesa style={{ paddingTop: pedidosMesa1.length > 0 ? 15 : 0, paddingBottom: pedidosMesa1.length > 0 ? 6 : 0 }}>
              {pedidosMesa1.map((pedido) => (
                <PedidoRealizado
                  key={pedido.id}
                  id={pedido.id}
                  numero={pedido.numero}
                  name={pedido.name}
                  mesa={pedido.mesa}
                  valoritem={pedido.valoritem}
                />
              ))}
            </BoxPedidoMesa>
          )}

          <BoxDownValor>
            <TouchableOpacity onPress={() => handleConfirmarPagamento(mesaum)}>
              <BoxValorTotal>
                <ValorTotal>
                  R${calcularValorTotal(pedidosMesa1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </ValorTotal>
              </BoxValorTotal>
            </TouchableOpacity>
          </BoxDownValor>

      </BoxMesaPedidos>

      <BoxMesaPedidos>

        <TouchableOpacity onPress={togglePedidoMesa2}>
          <BoxMesa>
            <MesaName>
              {mesadois}
            </MesaName>
          </BoxMesa>
        </TouchableOpacity>

        {showPedidoMesa2 && (
          <BoxPedidoMesa style={{ paddingTop: pedidosMesa2.length > 0 ? 15 : 0, paddingBottom: pedidosMesa2.length > 0 ? 6 : 0 }}>
          {pedidosMesa2.map((pedido) => (
            <PedidoRealizado
              key={pedido.id}
              id={pedido.id}
              numero={pedido.numero}
              name={pedido.name}
              mesa={pedido.mesa}
              valoritem={pedido.valoritem}
            />
          ))}
        </BoxPedidoMesa>
        )}

        <BoxDownValor>
        <TouchableOpacity onPress={() => handleConfirmarPagamento(mesadois)}>
            <BoxValorTotal>
              <ValorTotal>
                R${calcularValorTotal(pedidosMesa2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </ValorTotal>
            </BoxValorTotal>
          </TouchableOpacity>
        </BoxDownValor>

      </BoxMesaPedidos>

      <BoxMesaPedidos>

        <TouchableOpacity onPress={togglePedidoMesa3}>
          <BoxMesa>
            <MesaName>
              {mesatres}
            </MesaName>
          </BoxMesa>
        </TouchableOpacity>

        {showPedidoMesa3 && (
         <BoxPedidoMesa style={{ paddingTop: pedidosMesa3.length > 0 ? 15 : 0, paddingBottom: pedidosMesa3.length > 0 ? 6 : 0 }}>
         {pedidosMesa3.map((pedido) => (
           <PedidoRealizado
             key={pedido.id}
             id={pedido.id}
             numero={pedido.numero}
             name={pedido.name}
             mesa={pedido.mesa}
             valoritem={pedido.valoritem}
           />
         ))}
       </BoxPedidoMesa>
        )}

        <BoxDownValor>
        <TouchableOpacity onPress={() => handleConfirmarPagamento(mesadois)}>
            <BoxValorTotal>
              <ValorTotal>
                R${calcularValorTotal(pedidosMesa3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </ValorTotal>
            </BoxValorTotal>
        </TouchableOpacity>
        </BoxDownValor>
      </BoxMesaPedidos>
    </Container>
  );
}
