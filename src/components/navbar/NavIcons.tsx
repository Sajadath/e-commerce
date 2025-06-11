"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartCard from "./cart/CartCard";
import { AnimatePresence } from "motion/react";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;

  function handleProfile() {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  }

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt="Profile Icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="shadow-card absolute top-12 left-0 z-20 rounded-md p-4 text-sm">
          <Link href="/">حساب کاربری</Link>
          <button className="mt-2 cursor-pointer">خروج</button>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification Icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative"
        onMouseEnter={() => setIsCartOpen(true)}
        onMouseLeave={() => setIsCartOpen(false)}
      >
        <Link className="cursor-pointer" href="/cart">
          <Image src="/cart.png" alt="cart Icon" width={22} height={22} />
        </Link>
        <div className="bg-lightred absolute -top-4 -right-4 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
          <div className="bg-lightred/30 absolute top-0 right-0 bottom-0 left-0 -z-10 animate-ping rounded-full"></div>
          2
        </div>
        <AnimatePresence>{isCartOpen && <CartCard />}</AnimatePresence>
      </div>
    </div>
  );
}

export default NavIcons;
