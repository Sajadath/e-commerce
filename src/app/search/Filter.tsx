import FilterSelect from "./FilterSelect";

function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <FilterSelect
          selectFor="category"
          label="نوع"
          options={[
            { value: "physical", label: "فیزیکی" },
            { value: "digital", label: "دیجیتال" },
          ]}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="حداقل قیمت"
          className="w-24 rounded-xl border-b border-gray-400 pr-2 text-xs outline-none"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="حداکثر قیمت"
          className="w-24 rounded-xl border-b border-gray-400 pr-2 text-xs outline-none"
        />
        <FilterSelect
          selectFor="size"
          label="سایز"
          options={[
            { value: "small", label: "کوچک" },
            { value: "medium", label: "متوسط" },
            { value: "large", label: "بزرگ" },
          ]}
        />
        <FilterSelect
          selectFor="color"
          label="رنگ"
          options={[
            { value: "blue", label: "آبی" },
            { value: "red", label: "قرمز" },
          ]}
        />
        <FilterSelect
          selectFor="category"
          label="دسته بندی"
          options={[
            { value: "new", label: "جدید" },
            { value: "popular", label: "محبوب" },
          ]}
        />
      </div>
    </div>
  );
}

export default Filter;
