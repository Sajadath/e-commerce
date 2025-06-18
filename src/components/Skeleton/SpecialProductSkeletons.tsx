import ProductCardSkeleton from "./ProductCardSkeleton";

function SpecialProductSkeletons({ limit = 4 }: { limit?: number }) {
  return (
    <>
      <h2 className="mt-10 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        محصولات ویژه
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-32 2xl:grid-cols-4 2xl:px-64">
        {Array.from({ length: limit }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    </>
  );
}

export default SpecialProductSkeletons;
