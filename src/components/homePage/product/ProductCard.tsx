"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import ToomanIcon from "./ToomanIcon";
import AddToCartButton from "@/components/ui/AddToCartButton";

const variants = {
  hidden: { x: 50, opacity: 0, scale: 1.2 },
  visible: (customDelay: number) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: customDelay },
  }),
};

type ProductCardProps = {
  slug: string;
  productName: string | null;
  price: number | null;
  primaryImageUrl?: string;
  delay: number;
};

function ProductCard({
  slug,
  productName,
  price,
  primaryImageUrl,
  delay,
}: ProductCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      custom={delay || 0}
      className="flex flex-col justify-between p-2 break-words"
    >
      <div>
        <Link
          href={`/products/${slug}`}
          className="relative w-full overflow-hidden"
        >
          <div className="h-[250px] overflow-hidden rounded-lg bg-gray-200">
            {primaryImageUrl ? (
              <Image
                className="z-10 h-[250px] w-[100%] rounded-lg object-cover transition-all duration-400 hover:scale-125"
                src={primaryImageUrl}
                alt={` تصویر اول  ${productName || "محصول"}`}
                width={400}
                height={250}
              />
            ) : (
              <Image
                className="z-10 h-[250px] w-[100%] rounded-lg object-cover transition-all duration-400 hover:scale-125"
                src="/product.png"
                alt={` تصویر اول  ${productName || "محصول"}`}
                width={400}
                height={250}
              />
            )}
          </div>
        </Link>
        <div className="flex items-start justify-between gap-4 px-2 py-3">
          <Link
            href={`/products/${slug}`}
            className="hover:text-lightred text-sm font-semibold text-gray-800"
          >
            <span className="flex items-center justify-center text-sm">
              {productName || "محصول"}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between justify-self-end py-2">
        <span className="flex h-fit items-center justify-center gap-1 py-2 text-sm font-semibold">
          {(price && price.toLocaleString("fa-IR")) || "-"} <ToomanIcon />
        </span>
        <AddToCartButton />
      </div>
    </motion.div>
  );
}

export default ProductCard;
