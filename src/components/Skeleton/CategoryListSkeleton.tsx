import Skeleton from "react-loading-skeleton";

function CategoryListSkeleton({ count = 5 }: { count: number }) {
  return (
    <div className="mx-auto overflow-hidden">
      <h2 className="mt-2 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        دسته بندی محصولات
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className="h-38">
            <Skeleton className="h-full w-full" count={1} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryListSkeleton;
