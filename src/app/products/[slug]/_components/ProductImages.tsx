"use client";
import Image from "next/image";
import { useState } from "react";
const images = [
  { id: 1, url: "/watch.webp", alt: "product-name Image" },
  { id: 2, url: "/watchImg2.webp", alt: "product-name Image" },
  { id: 3, url: "/watchImg3.webp", alt: "product-name Image" },
  { id: 4, url: "/watchImg3.webp", alt: "product-name Image" },
];

function ProductImages() {
  const [shownImageIndex, setShownImageIndex] = useState(0);
  return (
    <section className="top-20 h-max w-full lg:sticky lg:w-1/2">
      <div className="">
        <div className="relative h-[500px]">
          <Image
            src={images[shownImageIndex].url}
            alt={images[shownImageIndex].alt}
            fill
            sizes="50vw"
            className="rounded-md object-contain"
          />
        </div>
        <div className="mt-8 flex items-center justify-between gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative h-32 w-1/4 cursor-pointer`}
              onClick={() => setShownImageIndex(index)}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="30vw"
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductImages;
