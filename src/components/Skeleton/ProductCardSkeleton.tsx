import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductCardSkeleton() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="h-[250px] w-full rounded-lg">
          <Skeleton className="h-full w-full" count={1} />
        </div>
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-10 px-2 py-3">
        <h1>
          <Skeleton count={1} />
        </h1>
        <h1>
          <Skeleton count={1} />
        </h1>
      </div>
      <div className="w-full p-1">
        <Skeleton count={1} className="h-full" />
      </div>
      <div className="flex justify-end py-2">
        <button
          disabled
          className="border-lightred hover:bg-lightred text-lightred w-fit animate-pulse cursor-pointer rounded-full border-2 px-3 py-1 text-sm opacity-35 hover:text-white"
        >
          <Skeleton
            count={1}
            width={100}
            baseColor=" #f35c7a "
            className="rounded-full"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
