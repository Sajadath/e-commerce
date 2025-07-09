import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";
import CategoryItem from "./CategoryItem";

async function CategoryList() {
  const wixClient = await wixClientServerVisitors();
  let categories;
  try {
    const res = await wixClient.collections.queryCollections().find();
    categories = res.items.slice(1, 6);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <div className="mx-auto my-5 w-full border-b-2 border-red-500 bg-red-300/50 px-10 py-15 text-center">
        <p className="w-full text-2xl font-semibold">
          خطا در بارگذاری دسته بندی ها
        </p>
        {error instanceof Error &&
          "message" in error &&
          (error.message as string)}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <h2 className="mt-2 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        دسته بندی محصولات
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <CategoryItem
              key={index}
              delay={index * 0.2}
              title={category.name!}
              imgUrl={category?.media?.mainMedia?.image?.url}
              slug={category.slug!}
            >
              <h3 className="absolute -bottom-3 -left-3 rotate-12 text-white">
                {category.numberOfProducts}
              </h3>
            </CategoryItem>
          ))}
      </div>
    </div>
  );
}

export default CategoryList;
