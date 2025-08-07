"use client";

import useCartStore from "@/stores/cartStore";
import InspectItems from "./InspectItems";

function CartCard() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <main>
      <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
        {cartItems.length > 0 ? (
          <InspectItems cartItems={cartItems} />
        ) : (
          <p>سبد خرید شما خالی است</p>
        )}
      </section>
    </main>
  );
}

export default CartCard;
