"use client";

import useCartStore from "@/stores/cartStore";
import EmptyCartView from "./_components/EmptyCartView";
import InspectItems from "./InspectItems";

function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <main>
      {cartItems.length > 0 ? (
        <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
          <InspectItems cartItems={cartItems} />
        </section>
      ) : (
        <EmptyCartView />
      )}
    </main>
  );
}

export default CartPage;
