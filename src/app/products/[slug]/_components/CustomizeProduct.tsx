"use client";

import { useState } from "react";
import SelectColor from "./SelectColor";
import SizeSelector from "./SizeSelector";

const colors = [
  { name: "مشکی", value: "bg-black" },
  { name: "آبی", value: "bg-sky-500" },
  { name: "امرالد", value: " bg-emerald-500" },
  { name: "سفید", value: "bg-white" },
];
const sizes = [
  { name: "کوچک", value: "small", isAvailable: true },
  { name: "متوسط", value: "medium", isAvailable: true },
  { name: "بزرگ", value: "large", isAvailable: false },
];

function CustomizeProduct() {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(
    null,
  );
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">انتخاب رنگ</h4>
      <ul className="flex items-center gap-3">
        {colors.map((color, index) => (
          <SelectColor
            key={color.value}
            color={color}
            setSelectedColorIndex={setSelectedColorIndex}
            index={index}
            selectedColorIndex={selectedColorIndex}
          />
        ))}
      </ul>

      <h4 className="font-medium">انتخاب سایز</h4>
      <ul className="flex items-center gap-5">
        {sizes.map((size, index) => (
          <SizeSelector
            key={size.value}
            size={size}
            setSelectedSizeIndex={setSelectedSizeIndex}
            selectedSizeIndex={selectedSizeIndex}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default CustomizeProduct;
