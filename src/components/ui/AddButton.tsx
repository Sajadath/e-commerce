"use client";
import useCartStore from "@/stores/cartStore";
import { motion } from "framer-motion";
import { useState } from "react";

type AddButtonProps = {
  itemId: string;
  title: string;
  price: number;
  imageUrl: string;
};

function AddButton({ itemId, title, price, imageUrl }: AddButtonProps) {
  const [hovered, setHovered] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <motion.button
      whileTap={{ y: 4 }}
      className="border-lightred text-lightred relative block w-fit cursor-pointer overflow-hidden rounded-full border-2 px-2 py-0.5 text-xs transition-all duration-500 hover:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        addToCart({ itemId, title, price, quantity: 1, imageUrl });
      }}
    >
      افزودن به سبد خرید
      <span
        className={`bg-lightred absolute top-0 right-0 bottom-0 left-0 -z-1 transition-all duration-500 ${hovered ? "translate-y-[0%]" : "translate-y-[100%]"}`}
      />
    </motion.button>
  );
}

export default AddButton;
