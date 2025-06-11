import Link from "next/link";

function ProductCard() {
  return (
    <div>
      <Link href="/test" className="relative h-fit w-fit">
        <img
          className="z-10 h-[250px] w-[400px] rounded-lg object-cover transition-all duration-700 hover:opacity-0"
          src="/airpodGreen.webp"
          alt="product"
          width={400}
          height={250}
        />
        <img
          className="absolute top-0 right-0 bottom-0 left-0 -z-1 h-[250px] w-[400px] rounded-lg object-cover"
          src="/airpodBlue.jpg"
          alt="product"
          width={400}
          height={250}
        />
      </Link>
      <div className="flex justify-between px-2 py-3">
        <span>نام محصول</span>
        <span className="font-semibold">قیمت </span>
      </div>
      <div className="p-1">
        <span className="text-sm text-gray-500">توضیحات محصول</span>
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
