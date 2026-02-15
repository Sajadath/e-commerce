"use client";

import { motion } from "framer-motion";
import LoginCard from "./LoginCard";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

function LoginView() {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-4 py-12">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-lightred/10 absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-lightred/5 absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
      />

      <LoginCard>
        <LoginHeader />
        <LoginForm />
      </LoginCard>
    </section>
  );
}

export default LoginView;
