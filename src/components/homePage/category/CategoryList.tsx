import { Bus, GraduationCap, Hamburger, ScanHeart, Shirt } from "lucide-react";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const categories = [
    {
      title: "پوشاک",
      Icon: Shirt,
      bg: "bg-gradient-to-br from-purple-600  to-purple-400",
    },
    {
      title: "سلامت",
      Icon: ScanHeart,
      bg: "bg-gradient-to-br from-green-600 to-green-400",
    },
    {
      title: "سفر",
      Icon: Bus,
      bg: "bg-gradient-to-br from-sky-600 to-sky-400",
    },
    {
      title: "آموزش",
      Icon: GraduationCap,
      bg: "bg-gradient-to-br from-yellow-600 to-yellow-400",
    },
    {
      title: "غذا",
      Icon: Hamburger,
      bg: "bg-gradient-to-br from-red-600 to-red-400",
    },
  ];

  return (
    <div className="overflow-hidden">
      <h2 className="mt-2 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        دسته بندی محصولات
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category, index) => (
          <CategoryItem key={index} title={category.title} bg={category.bg}>
            <category.Icon
              className="absolute -bottom-3 -left-3 rotate-12 text-white"
              size={90}
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
