"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type EmptyCartCardProps = {
  children: ReactNode;
};

function EmptyCartCard({ children }: EmptyCartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      className="w-full max-w-md rounded-3xl border border-gray-100 bg-white/95 p-8 shadow-card backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
}

export default EmptyCartCard;
