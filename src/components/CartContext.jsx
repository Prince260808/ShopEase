import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increment Product
  const incrementQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrement Product
  const decrementQty = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, qty: item.qty - 1} : item));
  };
  


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQty, decrementQty, }}>
      {children}
    </CartContext.Provider>
  );
};
