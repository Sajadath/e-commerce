"use client";
import { create } from "zustand";

export type CartItem = {
  url: string;
  itemId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  maxQuantity: number;
};

type cartStore = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
};

const useCartStore = create<cartStore>((set) => ({
  cartItems:
    typeof window !== "undefined" && localStorage.getItem("cartItems") !== null
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : [],

  addToCart: (item: CartItem) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.itemId === item.itemId,
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        }
        return { cartItems: updatedCartItems };
      } else {
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "cartItems",
            JSON.stringify([...state.cartItems, item]),
          );
        }
        return { cartItems: [...state.cartItems, item] };
      }
    }),

  increaseQuantity: (itemId: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) =>
        cartItem.itemId === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      return { cartItems: updatedCartItems };
    }),

  decreaseQuantity: (itemId: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems
        .map((cartItem) =>
          cartItem.itemId === itemId
            ? cartItem.quantity === 1
              ? null
              : { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem): cartItem is CartItem => cartItem !== null);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      return { cartItems: updatedCartItems };
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "cartItems",
          JSON.stringify(
            state.cartItems.filter((cartItem) => cartItem.itemId !== itemId),
          ),
        );
      }

      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.itemId !== itemId,
        ),
      };
    }),
}));

export default useCartStore;
