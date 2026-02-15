"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function FilterSelect({
  selectFor,
  label,
  options,
  transparent,
}: {
  selectFor: string;
  label: string;
  options: { value: string; label: string }[];
  transparent?: true;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const displayLabel = selected?.label ?? label;

  return (
    <div ref={containerRef} className="relative inline-block h-fit w-fit">
      <input type="hidden" name={selectFor} value={selected?.value ?? ""} />
      <button
        type="button"
        id={selectFor}
        onClick={() => setIsOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label}
        className={`focus:ring-lightred flex min-w-[7rem] cursor-pointer items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none ${
          transparent
            ? "rounded-none border-b border-gray-400 bg-transparent text-gray-700 hover:border-gray-600 hover:bg-gray-50/50"
            : "bg-customGray focus:border-lightred rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100"
        } `}
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={selectFor}
          className="absolute top-full z-50 mt-1.5 min-w-full overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black/5"
        >
          <li role="option" aria-selected={!selected}>
            <button
              type="button"
              onClick={() => {
                setSelected(null);
                setIsOpen(false);
              }}
              className="hover:bg-customGray/80 w-full px-4 py-2.5 text-right text-sm text-gray-500 transition-colors"
            >
              {label}
            </button>
          </li>
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected?.value === option.value}
            >
              <button
                type="button"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-right text-sm transition-colors ${
                  selected?.value === option.value
                    ? "bg-lightred/10 text-lightred font-medium"
                    : "hover:bg-customGray/80 text-gray-700"
                } `}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterSelect;
