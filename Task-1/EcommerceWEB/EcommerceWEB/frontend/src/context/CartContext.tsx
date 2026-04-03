import { createContext, useContext, useState } from "react";
import type { Product } from "../types/Product";

interface CartItem extends Product {
  quantity: number;
}

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const updateStorage = (data: CartItem[]) => {
    setCart(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const addToCart = (product: Product) => {
    const existing = cart.find((c) => c.id === product.id);
    if (existing) {
      updateStorage(
        cart.map((c) =>
          c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      updateStorage([...cart, { ...product, quantity: 1 }]);
    }
  };
  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("cart");
  };
  const removeFromCart = (id: number) => {
    updateStorage(cart.filter((c) => c.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);