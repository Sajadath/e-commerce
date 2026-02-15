"use client";

import { motion } from "framer-motion";

function LoginHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 text-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-2xl font-bold text-gray-800"
      >
        ورود به{" "}
        <span className="text-lightred">شاپر</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-2 text-sm text-gray-500"
      >
        برای ادامه، ایمیل و رمز عبور خود را وارد کنید
      </motion.p>
    </motion.header>
  );
}

export default LoginHeader;
