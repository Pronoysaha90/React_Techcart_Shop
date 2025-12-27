import { createContext, useContext, useState } from "react";

const CartCtx = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const add = (product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const toggle = () => setOpen((o) => !o);
  const clear = () => setItems([]);

  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, clear, open, toggle, total }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);
