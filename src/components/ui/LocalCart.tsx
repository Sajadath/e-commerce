"use client";

import useCartStore, { type CartItem } from "@/stores/cartStore";
import { useEffect } from "react";

function LocalCart() {
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      const oldCartItems = JSON.parse(cartItems) as CartItem[];
      oldCartItems.forEach((item) => addToCart(item));
    }
  }, []);

  return null;
}

export default LocalCart;
