"use client";

import useCartStore from "@/stores/cartStore";
import { FaTrash } from "react-icons/fa";

type QuantityProps = {
  currentQuantity: number;
  itemId: string;
};

function Quantity({ currentQuantity, itemId }: QuantityProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore(
    (state) => state,
  );
  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-1 shadow-lg">
      {currentQuantity >= 2 ? (
        <button
          onClick={() => decreaseQuantity(itemId)}
          className="text-lightred cursor-pointer text-lg font-bold"
        >
          -
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(itemId)}
          className="text-lightred cursor-pointer text-lg font-bold"
        >
          <FaTrash className="text-lightred size-4" />
        </button>
      )}
      <span className="text-lightred text-md font-bold">
        {currentQuantity.toLocaleString("fa-Ir")}
      </span>
      <button
        onClick={() => increaseQuantity(itemId)}
        className="text-lightred cursor-pointer text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
