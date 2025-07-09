import FilterSelect from "./FilterSelect";

interface HeadingProps {
  searchTitle?: string;
}

async function Heading({ searchTitle }: HeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="my-8 text-xl font-semibold"> {searchTitle} </h2>
      <div>
        <FilterSelect
          transparent
          selectFor="sort"
          label="مرتب سازی"
          options={[
            { value: "highToLow", label: "زیاد به کم" },
            { value: "lowToHigh", label: "کم به زیاد" },
            { value: "newest", label: "جدیدترین" },
            { value: "oldest", label: "قدیمی ترین" },
          ]}
        />
      </div>
    </div>
  );
}

export default Heading;
