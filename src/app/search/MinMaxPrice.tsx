"use client";
import { useState } from "react";
import RangeInput from "./RangeInput";

function MinMaxPrice() {
  const [value, setValue] = useState({
    minPrice: 0,
    maxPrice: 100000000,
  });

  return (
    <>
      <RangeInput
        value={value}
        setValue={setValue}
        inputName="minPrice"
        label="minPrice"
      />
      <RangeInput
        value={value}
        setValue={setValue}
        inputName="maxPrice"
        label="maxPrice"
      />
    </>
  );
}

export default MinMaxPrice;
