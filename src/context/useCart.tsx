import React, { createContext, useContext, useState } from "react";
import { PedidosProps } from "../components/PedidoRealizado";


type CartItem = PedidosProps & { id: string };

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextData = {
  items: CartItem[];
  adicionarAoCarrinho: (item: CartItem) => void;
  limparPedidos: () => void;
  removerDoCarrinho: (itemId: string) => void;
  removerDoCarrinhoByMesa: (mesa: string) => void;
  
};

const CartContextDefaultValues: CartContextData = {
  items: [],
  adicionarAoCarrinho: () => {}, 
  limparPedidos: () => {},
  removerDoCarrinho: () => {},
  removerDoCarrinhoByMesa: () => {},
};

export const CartContext = createContext<CartContextData>(CartContextDefaultValues);


const CartProvider = ({ children }: CartProviderProps) => {
  
  const [items, setItems] = useState<CartItem[]>([]);

  const adicionarAoCarrinho = (item: CartItem) => {
    setItems((prevItems) => [
      { ...item, id: generateUniqueId() },
      ...prevItems,
    ]);
  };
 
  const limparPedidos = () => {
    setItems([]); 
  };

const generateUniqueId = (): string => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); 

  return `${timestamp}-${random}`; 
};

const removerDoCarrinho = (itemId: string) => {
  setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
};

const removerDoCarrinhoByMesa = (mesa: string) => {
  setItems((prevItems) => prevItems.filter((item) => item.mesa !== mesa));
};

  return (
    <CartContext.Provider value={{ items, adicionarAoCarrinho, limparPedidos, removerDoCarrinho, removerDoCarrinhoByMesa }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };