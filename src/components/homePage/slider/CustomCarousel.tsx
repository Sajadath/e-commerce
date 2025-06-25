"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  backgroundImage: string;
  asideBg: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    backgroundImage: "/slider1.jpeg",
    asideBg: "bg-gradient-to-tr from-yellow-50 to-pink-50",
    title: "هرمدلی واسه هر استایلی",
  },
  {
    id: 2,
    backgroundImage: "/slider2.jpeg",
    asideBg: "bg-gradient-to-tr from-blue-50 to-yellow-50",
    title: "تجربه ای طلایی از خرید",
  },

  {
    id: 3,
    backgroundImage: "/slider3.jpeg",
    asideBg: "bg-gradient-to-tr from-pink-50 to-blue-50",
    title: "کیفیتی تکرار نشدنی",
  },
];

const CustomCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  function nextSlide() {
    setCurrentSlide((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function previousSlide() {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  const clearAndSetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const handleNext = () => {
    nextSlide();
    clearAndSetInterval();
  };

  const handlePrev = () => {
    previousSlide();
    clearAndSetInterval();
  };

  useEffect(() => {
    clearAndSetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      dir="ltr"
      className="relative flex h-[calc(100dvh-80px)] w-full items-center justify-center overflow-hidden"
    >
      <div className="flex h-full w-full flex-col lg:flex-row">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <motion.div
              key={slide.id}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`${
                isActive
                  ? "h-full w-full lg:h-full lg:w-full"
                  : "h-1/8 w-full lg:h-full lg:w-1/8"
              } flex border-gray-200/20 transition-all duration-700`}
            >
              <div
                className={`relative transition-all ${currentSlide !== index && "cursor-pointer"} duration-700 ${
                  isActive ? "w-1/2" : "w-full"
                }`}
              >
                <Image
                  onClick={() => {
                    clearAndSetInterval();
                    if (currentSlide !== index) setCurrentSlide(index);
                  }}
                  fill
                  style={{ objectFit: "cover" }}
                  className="h-full w-full object-cover"
                  src={slide.backgroundImage}
                  alt={`Slide ${slide.id}`}
                />
              </div>
              <div
                className={`relative h-full overflow-hidden ${slide.asideBg} transition-all duration-700 ${
                  isActive ? "w-1/2" : "w-0"
                }`}
              >
                <div className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col gap-4">
                  <h2 className="text-md font-bold text-nowrap text-[#3a4445]/50 md:text-xl lg:text-2xl">
                    {slide.title}
                  </h2>
                  <div className="mx-auto flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-black via-black/30 to-transparent" />
                    <button className="z-20 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-black bg-transparent px-6 py-1 text-center text-black transition duration-300 hover:bg-black hover:text-white">
                      <h2>خرید</h2>
                    </button>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-black/30 to-black" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 cursor-pointer rounded-full bg-black/20 p-4 text-white backdrop-blur-[2px] transition-all duration-500 hover:bg-black/50"
      >
        &lt;
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 cursor-pointer rounded-full bg-black/20 p-4 text-white backdrop-blur-[2px] transition-all duration-500 hover:bg-black/50"
      >
        &gt;
      </button>

      <div className="absolute bottom-4 flex items-center justify-center gap-4 rounded-full px-3 py-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearAndSetInterval();
              setCurrentSlide(index);
            }}
            className={`relative h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-gray-600" : "bg-transparent"
            }`}
          >
            <div
              className={`absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-black bg-transparent`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
