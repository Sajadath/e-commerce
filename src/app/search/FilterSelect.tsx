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
    <select
      name={selectFor}
      id={selectFor}
      className={`bg-customGray px-4 py-2 text-xs font-medium ${
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
  );
}

export default FilterSelect;
