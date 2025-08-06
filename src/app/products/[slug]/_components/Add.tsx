"use client";

import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";
import { useState } from "react";

function Add({ stock }: { stock: number }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <h4>خرید این محصول </h4>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100">
            <button
              disabled={quantity === 1}
              className="cursor-pointer rounded-full p-4 text-xl disabled:opacity-20"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            {quantity}
            <button
              disabled={quantity === stock}
              className="cursor-pointer rounded-full p-4 text-xl disabled:opacity-20"
              onClick={() => {
                if (quantity + 1 <= stock) {
                  setQuantity((prev) => prev + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>

        <button className="ring-lightred text-lightred hover:bg-lightred w-36 cursor-pointer rounded-3xl bg-transparent px-4 py-2 text-sm ring-1 transition-all duration-300 hover:text-white active:translate-y-1 disabled:bg-pink-200 disabled:text-white disabled:opacity-70 disabled:ring-0">
          اضافه به سبد خرید
        </button>
      </div>

      {stock < 6 && (
        <div className="py-2 text-center text-xs">
          فقط{" "}
          <span className="px-1 text-orange-500">
            {convertToPersianNumber("5")} عدد
          </span>
          در انبار موجود است
        </div>
      )}
    </div>
  );
}

export default Add;
