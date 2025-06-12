import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";

function PriceBlock() {
  return (
    <div className="flex items-center gap-4">
      <h3 className="text-xl text-gray-500 line-through">
        {convertToPersianNumber("1,400,000,000")} تومان
      </h3>
      <h2 className="text-2xl font-medium">
        {convertToPersianNumber("1,000,000")} تومان
      </h2>
    </div>
  );
}

export default PriceBlock;
