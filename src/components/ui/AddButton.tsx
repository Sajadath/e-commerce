"use client";
import useCartStore from "@/stores/cartStore";
import { motion } from "framer-motion";
import { useState } from "react";

type AddButtonProps = {
  url: string;
  itemId: string;
  title: string;
  price: number;
  imageUrl: string;
  maxQuantity: number;
  fullButton?: boolean;
};

function AddButton({
  url,
  itemId,
  title,
  price,
  imageUrl,
  maxQuantity,
  fullButton,
}: AddButtonProps) {
  const [hovered, setHovered] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <motion.button
      whileTap={{ y: 4 }}
      className={`${fullButton ? "w-full" : "w-fit"} border-lightred text-lightred relative cursor-pointer overflow-hidden rounded-full border-2 px-2 py-2 text-xs transition-all duration-500 hover:text-white`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        addToCart({
          url,
          itemId,
          title,
          price,
          quantity: 1,
          imageUrl,
          maxQuantity,
        });
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
