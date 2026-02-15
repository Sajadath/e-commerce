"use client";

import Image from "next/image";

const maxPrice = 100000000; // Maximum price limit
const minPrice = 0; // Minimum price limit

function RangeInput({
  inputName,
  label,
  value,
  setValue,
}: {
  inputName: string;
  label: "minPrice" | "maxPrice";
  value: { minPrice: number; maxPrice: number };
  setValue: React.Dispatch<
    React.SetStateAction<{ minPrice: number; maxPrice: number }>
  >;
}) {
  function faToNumber(faString: string): number {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const englishDigits = "0123456789";

    const normalized = faString
      .replace(/[۰-۹]/g, (digit) => englishDigits[persianDigits.indexOf(digit)])
      .replace(/٬/g, "") // Remove Persian comma
      .replace(/٫/g, "."); // Optional: replace Persian decimal separator if present

    return parseFloat(normalized);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const num = faToNumber(e.target.value);
      if (isNaN(num)) {
        return;
      }
      if (num < minPrice) {
        setValue((state) => ({ ...state, [label]: minPrice }));
        return;
      } else if (num > maxPrice) {
        setValue((state) => ({ ...state, [label]: maxPrice }));
        return;
      } else {
        setValue((state) => ({ ...state, [label]: num }));
      }
    }
  };
  return (
    <div dir="ltr" className="flex flex-col items-center gap-2">
      <div dir="rtl" className="flex items-center gap-1 text-sm font-medium">
        <span>{label === "minPrice" ? "از" : "تا"}</span>
        <input
          dir="ltr"
          type="text"
          name={`${inputName}Number`}
          onBlur={() => {
            const num = faToNumber(value[label].toString());
            if (label === "minPrice" && num > Number(value.maxPrice)) {
              setValue((state) => ({
                ...state,
                [label]: Number(value.maxPrice),
              }));
            } else if (label === "maxPrice" && num < Number(value.minPrice)) {
              setValue((state) => ({
                ...state,
                [label]: Number(value.minPrice),
              }));
            }
          }}
          inputMode="numeric"
          className="block h-full w-fit border-b border-gray-300 pb-1 pl-1 text-xs font-bold outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
          max={maxPrice}
          min={minPrice}
          value={value[label].toLocaleString("fa-IR")}
          onChange={(e) => handleChange(e)}
        />
        <span>
          <Image
            src="/toman.svg"
            alt="تومان"
            width={25}
            height={25}
            className="inline align-middle"
          />
        </span>
      </div>
    </div>
  );
}

export default RangeInput;
