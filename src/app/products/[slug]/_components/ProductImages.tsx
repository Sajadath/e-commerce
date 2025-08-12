"use client";
import Image from "next/image";
import { useState } from "react";
import ImageScroller from "./ImageScroller";

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
    <section className="top-10 mt-2 h-max w-full max-w-screen lg:sticky lg:w-1/2">
      <div className="w-full">
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

        <div className="relative h-50 w-full">
          <ImageScroller
            imagesArray={imagesArray}
            shownImageIndex={shownImageIndex}
            setShownImageIndex={setShownImageIndex}
            setImageIsLoading={setImageIsLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductImages;
