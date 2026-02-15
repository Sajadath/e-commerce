"use client";

import { motion } from "framer-motion";
import EmptyCartCard from "./EmptyCartCard";
import EmptyCartContent from "./EmptyCartContent";

function EmptyCartView() {
  return (
    <section className="relative flex min-h-[calc(100dvh-theme(spacing.20))] w-full items-center justify-center overflow-hidden px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-customGray/80 via-white to-lightred/5"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lightred/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-lightred/5 blur-3xl"
      />

      <EmptyCartCard>
        <EmptyCartContent />
      </EmptyCartCard>
    </section>
  );
}

export default EmptyCartView;
