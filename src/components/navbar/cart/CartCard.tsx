"use client";

import CartContent from "./CartContent";

function CartCard() {
  const cartItems = null;
  return (
    <div className="shadow-card absolute top-10 left-0 z-20 flex w-max flex-col gap-6 bg-white p-4">
      <div className="absolute right-0 bottom-full left-0 h-7 bg-transparent"></div>
      <h2 className="text-md font-semibold">سبد خرید</h2>
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      {!cartItems ? (
        <CartContent />
      ) : (
        <div className="text-center text-gray-500">
          هیچ کالایی در سبد خرید وجود ندارد
        </div>
      )}
    </div>
  );
}

export default CartCard;
