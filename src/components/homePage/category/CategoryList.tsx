import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <>
      <h2 className="mt-10 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        دسته بندی محصولات
      </h2>

      <div className="px-4">
        <div className="mx-auto flex w-[300px] flex-nowrap items-center justify-center space-x-4 overflow-x-auto overflow-y-hidden md:w-[400px] lg:w-[500px] xl:w-[800px]">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </>
  );
}

export default CategoryList;
