import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addtocart = (productId) => {
    setCart((prevcart) => [...prevcart, productId]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addtocart, clear }}>
      {children}
    </CartContext.Provider>
  );
};
