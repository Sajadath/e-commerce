"use client";

import { AnimatePresence, motion } from "motion/react";

interface SelectColorProps {
  color: { name: string; value: string };
  setSelectedColorIndex: (color: number) => void;
  index: number;
  selectedColorIndex: number;
}

function SelectColor({
  color,
  setSelectedColorIndex,
  index,
  selectedColorIndex,
}: SelectColorProps) {
  return (
    <li
      title={color.name}
      className={`relative size-7 cursor-pointer rounded-full ${color.value} ring-1 ring-gray-300`}
      onClick={() => setSelectedColorIndex(index)}
    >
      <AnimatePresence>
        {selectedColorIndex === index && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-1/2 left-1/2 size-9 -translate-1/2 rounded-full ring-2 ring-blue-300 ring-offset-2 ring-offset-white"
          ></motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default SelectColor;
