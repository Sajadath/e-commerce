"use client";
export const dynamic = "force-dynamic";
import useGlobalUiStore from "@/stores/globalUiStore";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";

function NavBarFocusedEffect() {
  const searchBarFocused = useGlobalUiStore((state) => state.searchBarFocused);

  return createPortal(
    <AnimatePresence>
      {searchBarFocused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-[80px] right-0 bottom-0 left-0 z-50 bg-black/20 backdrop-blur-sm transition-all duration-500"
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default NavBarFocusedEffect;
