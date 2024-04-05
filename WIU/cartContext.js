import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
