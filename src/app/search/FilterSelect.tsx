import { ChevronDown } from "lucide-react";

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
  return (
    <div className="relative inline-block h-fit w-fit">
      <select
        name={selectFor}
        id={selectFor}
        className={`bg-customGray appearance-none px-7 py-2 text-xs font-medium ${
          transparent
            ? "rounded-none border-b border-gray-500 bg-transparent"
            : "rounded-2xl"
        }`}
      >
        <option>{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pr-3">
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}

export default FilterSelect;
