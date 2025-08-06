"use client";
import useCartStore from "@/stores/cartStore";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoCart, IoCartOutline } from "react-icons/io5";
import CartCard from "./cart/CartCard";

function CartInNavbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalCartItems = useCartStore((state) => state.cartItems).length;
  const cartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        event.target &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (isCartOpen && e.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    };
  }, [isCartOpen]);
  return (
    <div
      ref={cartRef}
      className="relative"
      onMouseEnter={() => setIsCartOpen(true)}
      onMouseLeave={() => setIsCartOpen(false)}
    >
      <Link className="cursor-pointer" href="/cart">
        {totalCartItems > 0 ? (
          <IoCart className="h-[26px] w-[26px]" />
        ) : (
          <IoCartOutline className="h-[26px] w-[26px]" />
        )}
      </Link>
      {totalCartItems > 0 && (
        <div className="bg-lightred absolute -top-4 -right-4 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
          <div className="bg-lightred/30 absolute top-0 right-0 bottom-0 left-0 -z-10 animate-ping rounded-full"></div>
          {totalCartItems}
        </div>
      )}
      <AnimatePresence>{isCartOpen && <CartCard />}</AnimatePresence>
    </div>
  );
}

export default CartInNavbar;
