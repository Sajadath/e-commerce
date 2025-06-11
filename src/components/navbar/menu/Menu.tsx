"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="Menu Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpenMenu((openMenu) => !openMenu)}
      />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-0 left-0 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 bg-black/95 font-semibold text-white backdrop-blur-lg"
          >
            <Link href="/">خانه</Link>
            <Link href="/about">فروشگاه</Link>
            <Link href="/contact">تخفیف‌ها</Link>
            <Link href="/contact">درباره ما</Link>
            <Link href="/contact">تماس با ما</Link>
            <Link href="/contact">خروج</Link>
            <Link href="/contact">سبد خرید(1)</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
