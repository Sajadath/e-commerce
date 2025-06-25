import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";
import Image from "next/image";

function Campaign() {
  return (
    <div className="flex h-fit flex-row-reverse justify-between rounded-lg bg-gradient-to-r from-pink-50 to-pink-200 px-4 xl:h-64">
      <div className="flex w-2/3 flex-col items-center justify-center gap-8 py-3">
        <h1 className="[37] text-sm leading-[48px] font-semibold text-gray-500 sm:text-3xl">
          تا{" "}
          <span className="text-lightred text-2xl font-bold sm:text-4xl">
            {convertToPersianNumber("50")}%
          </span>{" "}
          تخفیف بگیرید
        </h1>
        <button className="bg-lightred border-lightred hover:text-lightred w-max cursor-pointer rounded-3xl border px-2 py-1 text-sm text-white hover:bg-transparent sm:px-5 sm:py-3">
          همین الان خرید کنید
        </button>
      </div>
      <div className="relative w-1/3">
        <Image
          src="/woman.png"
          alt="campaing banner"
          fill
          className="object-cover sm:object-contain"
        />
      </div>
    </div>
  );
}

export default Campaign;
