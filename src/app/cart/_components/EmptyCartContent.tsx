"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function EmptyCartContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.15 }}
        className="mb-6 flex justify-center"
      >
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full bg-customGray/80 text-4xl"
          aria-hidden
        >
          🛒
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-2xl font-bold text-gray-800"
      >
        سبد خرید شما خالی است
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-3 text-center text-gray-500"
      >
        هنوز محصولی به سبد خرید اضافه نکرده‌اید. برای مشاهده محصولات به فروشگاه بروید.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-lightred bg-lightred px-6 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-lightred-hover hover:shadow-xl"
          >
            بازگشت به فروشگاه
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}

export default EmptyCartContent;
