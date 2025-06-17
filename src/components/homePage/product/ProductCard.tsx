import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  slug?: string;
  productName?: string | null;
  price?: number | null;
  primaryImageUrl?: string;
};

function ProductCard({
  slug,
  productName,
  price,
  primaryImageUrl,
}: ProductCardProps) {
  return (
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
      <div className="flex justify-between px-2 py-3">
        <span>{productName || "محصول"}</span>
        <span className="flex items-center justify-center gap-1 font-semibold">
          {(price && convertToPersianNumber(price)) || "-"}{" "}
          <Image
            src="/toman.svg"
            alt="تومان"
            width={25}
            height={25}
            className="ml-1 inline-block"
          />
        </span>
      </div>

      <div className="flex justify-end py-2">
        <button className="border-lightred hover:bg-lightred text-lightred w-fit cursor-pointer rounded-full border-2 px-3 py-1 text-sm hover:text-white">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
