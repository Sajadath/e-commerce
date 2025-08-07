"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "@/lotties/error404.json";
import { motion } from "motion/react";

const LottieComponent: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex h-[calc(100dvh-80px)] items-center justify-center">
      <div className="relative max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="bg-lightred/50 absolute top-20 right-0 left-0 z-1 mx-auto mb-4 w-fit rounded-lg px-3 text-center text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-white"
        >
          صفحه مورد نظر پیدا نشد :(
        </motion.h1>

        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default LottieComponent;
