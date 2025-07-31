"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "@/lotties/error404.json";

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
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      <div className="relative w-lg">
        <h1 className="bg-lightred/50 absolute top-20 right-0 left-0 z-50 mx-auto mb-4 w-fit rounded-lg px-3 text-center text-lg font-bold text-white">
          صفحه مورد نظر پیدا نشد :(
        </h1>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default LottieComponent;
