"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const variants = {
  hidden: { y: 40, opacity: 0 },
  visible: (customDelay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: customDelay },
  }),
};

interface CategoryItemProps {
  title: string;
  children: React.ReactNode;
  imgUrl: string | undefined;
  slug: string;
  delay: number;
}

const CategoryItem = ({
  title,
  children,
  imgUrl,
  slug,
  delay,
}: CategoryItemProps) => {
  const [beingHovered, setBeingHovered] = useState(false);

  return (
    <motion.a
      onMouseEnter={() => setBeingHovered(true)}
      onMouseLeave={() => setBeingHovered(false)}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }, // no delay
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.1 }, // no delay
      }}
      variants={variants}
      className="cursor-pointer"
      href={`/search?categorySlug=${slug}&searchTitle=${title}`}
    >
      <div
        className={`relative flex h-38 items-end rounded-2xl border border-gray-200 text-center shadow-lg`}
      >
        {children}
        <h3
          className={`bg-lightred/80 mx-auto h-fit rounded-t-2xl p-2 px-4 transition-all duration-300 ${beingHovered ? "pb-10" : "pb-0"} text-lg font-semibold text-white backdrop-blur-xs`}
        >
          {title}
        </h3>
        {imgUrl ? (
          <Image
            className="-z-10 rounded-2xl"
            src={imgUrl}
            alt={title}
            fill
            objectFit="cover"
          />
        ) : null}
      </div>
    </motion.a>
  );
};

export default CategoryItem;
