"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

type LoginButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  loading?: boolean;
  children: React.ReactNode;
};

function LoginButton({
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: LoginButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`border-lightred bg-lightred hover:bg-lightred-hover relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border-2 px-6 py-3.5 font-bold text-white shadow-lg transition-colors hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 ${className} `}
      {...props}
    >
      {loading ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className="loader scale-75" />
          <span>در حال ورود...</span>
        </motion.span>
      ) : (
        <motion.span
          initial={false}
          animate={{ opacity: 1 }}
          className="relative z-10"
        >
          {children}
        </motion.span>
      )}
    </motion.button>
  );
}

export default LoginButton;
