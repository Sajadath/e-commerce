"use client";
import { motion } from "framer-motion";

interface CategoryItemProps {
  title: string;
  children: React.ReactNode;
  bg: string;
}

const CategoryItem = ({ title, children, bg }: CategoryItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
    >
      <div
        className={`relative flex flex-col items-center justify-center rounded-2xl border border-gray-200 shadow-lg ${bg} p-10 shadow`}
      >
        {children}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </motion.div>
  );
};

export default CategoryItem;
