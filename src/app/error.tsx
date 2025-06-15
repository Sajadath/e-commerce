"use client"; // Error boundaries must be Client Components

import { convertToPersianNumber } from "@/helperFunctions/stringToPersianNumbers";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [buttonIsFocused, setButtonIsFocuse] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center">
      <h2 className="font-bold">
        {convertToPersianNumber("404")} چیزی اشتباه شد :(
      </h2>
      <button
        onMouseEnter={() => setButtonIsFocuse(true)}
        onMouseLeave={() => setButtonIsFocuse(false)}
        className="border-lightred text-lightred relative my-10 block cursor-pointer overflow-hidden rounded-3xl border px-4 py-3 text-xs font-semibold transition-all duration-500 hover:text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        دوباره امتحان کنید
        <div
          className={`bg-lightred absolute top-0 right-0 bottom-0 left-0 -z-1 h-full w-full transition-all duration-500 ${buttonIsFocused ? "translate-y-0" : "translate-y-full"}`}
        ></div>
      </button>
    </div>
  );
}
