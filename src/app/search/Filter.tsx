import FilterSelect from "./FilterSelect";
import MinMaxPrice from "./MinMaxPrice";

function Filter() {
  return (
    <div className="my-8 flex justify-between">
      <div className="flex flex-wrap items-center gap-6">
        <FilterSelect
          selectFor="category"
          label="نوع"
          options={[
            { value: "physical", label: "فیزیکی" },
            { value: "digital", label: "دیجیتال" },
          ]}
        />
        <MinMaxPrice />

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
