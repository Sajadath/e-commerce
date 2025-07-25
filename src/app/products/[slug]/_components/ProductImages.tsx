"use client";
import Image from "next/image";
import { useState } from "react";

type ImagesArray = {
  title: string;
  image: {
    url: string;
  };
}[];

function ProductImages({ imagesArray }: { imagesArray: ImagesArray }) {
  const [shownImageIndex, setShownImageIndex] = useState(0);
  const [imageIsLoading, setImageIsLoading] = useState(true);

  return (
    <section className="top-20 mt-2 h-max w-full lg:sticky lg:w-1/2">
      <div className="">
        <div className="relative h-[500px]">
          <div
            className={`${imageIsLoading ? "block" : "hidden"} relative h-full`}
          >
            <div className="loader absolute top-1/2 left-1/2 -translate-1/2"></div>
          </div>

          <Image
            src={imagesArray[shownImageIndex].image.url}
            alt={imagesArray[shownImageIndex].title}
            fill
            sizes="50vw"
            className={`${imageIsLoading ? "invisible" : "block"} rounded-md object-contain`}
            onLoad={() => setImageIsLoading(false)}
          />
        </div>

        <div className="mt-8 flex items-center justify-end gap-6">
          {imagesArray.map((img, index) => (
            <div
              key={index}
              className={`relative h-32 w-1/4 cursor-pointer`}
              onClick={() => {
                if (shownImageIndex === index) return;
                setImageIsLoading(true);
                setShownImageIndex(index);
              }}
            >
              <Image
                src={img.image.url}
                alt={img.title}
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
