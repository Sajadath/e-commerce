import React, { useRef, useState, MouseEvent } from "react";
import Image from "next/image";

type ImageData = {
  image: {
    url: string;
  };
  title: string;
};

type ImageScrollerProps = {
  imagesArray: ImageData[];
  shownImageIndex: number;
  setShownImageIndex: (index: number) => void;
  setImageIsLoading: (loading: boolean) => void;
};

const ImageScroller: React.FC<ImageScrollerProps> = ({
  imagesArray,
  shownImageIndex,
  setShownImageIndex,
  setImageIsLoading,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollRef}
      className={`max absolute top-0 right-0 bottom-0 left-0 mx-4 flex max-w-full flex-row items-center gap-6 overflow-x-auto ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ userSelect: isDragging ? "none" : "auto" }}
    >
      {imagesArray.map((img, index) => (
        <div
          key={index}
          className="relative h-32 w-32 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-gray-200"
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
            draggable={false}
            className="object-fit rounded-md select-none"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
