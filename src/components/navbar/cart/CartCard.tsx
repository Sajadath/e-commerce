"use client";

import { motion } from "motion/react";
import CartContent from "./CartContent";

function CartCard() {
  const cartItems = null;
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
      className="shadow-card absolute top-10 left-0 z-50 flex w-max flex-col gap-3 bg-white p-4"
    >
      <div className="absolute right-0 bottom-full left-0 h-7 bg-transparent"></div>
      <h2 className="text-md grow font-semibold">سبد خرید</h2>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      {!cartItems ? (
        <CartContent />
      ) : (
        <div className="text-center text-gray-500">
          هیچ کالایی در سبد خرید وجود ندارد
        </div>
      )}
    </motion.div>
  );
}

export default CartCard;
