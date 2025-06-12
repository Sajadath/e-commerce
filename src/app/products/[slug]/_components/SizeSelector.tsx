"use client";
interface SizeSelectorProps {
  size: { name: string; value: string; isAvailable: boolean };
  setSelectedSizeIndex: (size: number) => void;
  selectedSizeIndex: number | null;
  index: number;
}

function SizeSelector({
  size,
  setSelectedSizeIndex,
  selectedSizeIndex,
  index,
}: SizeSelectorProps) {
  return (
    <li>
      <button
        disabled={!size.isAvailable}
        className={`${index === selectedSizeIndex ? "text-lightred scale-125 bg-white" : "bg-lightred scale-100 text-white"} border-lightred hover:bg-lightred-dark block cursor-pointer rounded-lg border px-3 py-1 text-sm transition-all duration-300 outline-none disabled:scale-95 disabled:cursor-not-allowed disabled:opacity-60`}
        onClick={() => size.isAvailable && setSelectedSizeIndex(index)}
      >
        {size.name}
      </button>
    </li>
  );
}

export default SizeSelector;
