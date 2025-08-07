"use client";

import { motion } from "motion/react";
import CartContent from "./CartContent";
import useCartStore from "@/stores/cartStore";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function CartCard() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      className="shadow-card absolute top-full left-0 z-50 flex w-max flex-col gap-3 rounded-2xl bg-white px-1 py-4"
    >
      <h2 className="text-md grow px-3 font-semibold">سبد خرید</h2>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      {cartItems.length > 0 ? (
        <CartContent cartItems={cartItems} />
      ) : (
        <div className="flex items-center justify-center gap-3 px-3 text-center text-gray-500">
          <span>هیچ کالایی در سبد خرید شما وجود ندارد</span>
          <div className="relative">
            <MdOutlineRemoveShoppingCart className="fill-lightred size-7" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default CartCard;
