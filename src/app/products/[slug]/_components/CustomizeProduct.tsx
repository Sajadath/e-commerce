"use client";

import { useState } from "react";
import SelectColor from "./SelectColor";
import SizeSelector from "./SizeSelector";
import { ProductOptions } from "../ProductDetail";

function CustomizeProduct({
  productOptions,
}: {
  productOptions?: ProductOptions;
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(
    null,
  );

  const colorOptionsChoices = productOptions?.find(
    (option) => option.name === "Color",
  )?.choices;
  const sizeOptionsChoices = productOptions?.find(
    (option) => option.name === "Size",
  )?.choices;

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">انتخاب رنگ</h4>
      {colorOptionsChoices && colorOptionsChoices?.length > 0 ? (
        <ul className="flex items-center gap-3">
          {colorOptionsChoices.map((color, index) => (
            <SelectColor
              key={index}
              color={{ name: color.description, value: color.value }}
              setSelectedColorIndex={setSelectedColorIndex}
              index={index}
              selectedColorIndex={selectedColorIndex}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-xs text-slate-400">محصول تک رنگ است</p>
        </div>
      )}

      <h4 className="font-medium">انتخاب سایز</h4>
      {sizeOptionsChoices && sizeOptionsChoices?.length > 0 ? (
        <ul className="flex items-center gap-5">
          {sizeOptionsChoices.map((size, index) => (
            <SizeSelector
              key={index}
              size={{
                name: size.description,
                value: size.value,
                isAvailable: size.inStock,
              }}
              setSelectedSizeIndex={setSelectedSizeIndex}
              selectedSizeIndex={selectedSizeIndex}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-xs text-slate-400">محصول تک سایز است</p>
        </div>
      )}
    </div>
  );
}

export default CustomizeProduct;
