import { create } from "zustand";

export type CartItem = {
  itemId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

type cartStore = {
  cartItems: CartItem[];

  addToCart: (item: CartItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
};

const useCartStore = create<cartStore>((set) => ({
  cartItems: [],

  addToCart: (item: CartItem) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.itemId === item.itemId,
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        return { cartItems: updatedCartItems };
      } else {
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
      return { cartItems: updatedCartItems };
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.itemId !== itemId,
        ),
      };
    }),
}));

export default useCartStore;
