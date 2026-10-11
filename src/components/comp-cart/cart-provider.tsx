"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  size: number;
  quantity: number;
  stock: number;
};

type CartContextType = {
  items: CartItem[];
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: number) => void;
  updateQuantity: (productId: string, size: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "monet-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load the saved cart after the component mounts in the browser.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed: unknown = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          setItems(parsed as CartItem[]);
        }
      }
    } catch (error) {
      console.error("Could not load the saved cart:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Persist changes after the initial cart has loaded.
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Could not save the cart:", error);
    }
  }, [items, isInitialized]);

  const addToCart = useCallback((item: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (existing) =>
          existing.productId === item.productId && existing.size === item.size,
      );

      if (existingItem) {
        return currentItems.map((existing) =>
          existing.productId === item.productId && existing.size === item.size
            ? {
                ...existing,
                quantity: Math.min(
                  existing.quantity + item.quantity,
                  item.stock,
                ),
                stock: item.stock,
              }
            : existing,
        );
      }

      return [...currentItems, item];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, size: number) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.size === size),
      ),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: number, quantity: number) => {
      setItems((currentItems) =>
        currentItems
          .map((item) =>
            item.productId === productId && item.size === size
              ? {
                  ...item,
                  quantity: Math.min(
                    Math.max(1, Math.floor(quantity)),
                    item.stock,
                  ),
                }
              : item,
          )
          .filter((item) => item.stock > 0),
      );
    },
    [],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
