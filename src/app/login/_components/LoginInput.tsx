"use client";

import { motion } from "framer-motion";
import { InputHTMLAttributes, forwardRef, useState, useId } from "react";

type LoginInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  function LoginInput(
    { label, error, type = "text", className = "", ...props },
    ref,
  ) {
    const id = useId();
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="w-full">
        <motion.div
          initial={false}
          animate={{
            scale: focused ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative"
        >
          <input
            ref={ref}
            id={id}
            type={inputType}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`peer bg-customGray/50 focus:border-lightred focus:ring-lightred/20 w-full rounded-xl border-2 px-4 py-3 text-black transition-all duration-300 outline-none placeholder:text-transparent focus:bg-white focus:ring-2 ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200"} ${className} `}
            placeholder={label}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
          <label
            htmlFor={id}
            className={`peer-focus:text-lightred pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm font-medium transition-all duration-300 peer-focus:top-0 peer-focus:right-3 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:right-3 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 ${focused ? "text-lightred top-0 right-3 scale-75 bg-white px-2" : "text-gray-500"} ${error ? "text-red-500 peer-focus:text-red-500" : ""} `}
          >
            {label}
          </label>
          {isPassword && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((p) => !p)}
              className="hover:text-lightred absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 transition-colors"
              aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </motion.div>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  },
);

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878a4.5 4.5 0 106.262 6.262M4.5 4.5l15 15"
      />
    </svg>
  );
}

export default LoginInput;
