import Link from "next/link";
import Icons from "./Icons";
import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";

function TopLeftSection() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 text-right md:w-1/2 lg:w-1/4">
      <Link className="text-center text-2xl font-bold tracking-wide" href="/">
        SHOPPER
      </Link>

      <p className="py-4 text-sm font-semibold text-black/60">
        آدرس : طهران ، خیابان طهران کوچه ، طهران
      </p>
      <span className="block font-bold">
        <a href="mailto:sajadath1@gmail.com">sajadath1@gmail.com</a>
      </span>
      <span className="block font-bold">
        <a dir="ltr" href="tel:+9891149099575">
          {" "}
          +{convertToPersianNumber(" 98 911 490 9575")}
        </a>
      </span>
      <div className="flex gap-6">
        <Icons />
      </div>
    </div>
  );
}

export default TopLeftSection;
