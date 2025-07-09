import ProductCardSkeleton from "@/components/Skeleton/ProductCardSkeleton";

function SearchInProductsSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    </>
  );
}

export default SearchInProductsSkeleton;
