"use client";
import StyledLine from "@/components/ui/StyledLine";
import Skeleton from "react-loading-skeleton";

function ProductSkeleton() {
  return (
    <>
      <section className="mt-3 flex h-[700px] w-full flex-col lg:w-1/2">
        <div className="h-[80%] w-full rounded-md">
          <Skeleton className="h-full w-full" count={1} />
        </div>
        <div className="mt-8 flex h-[20%] items-center justify-end gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="h-full w-[20%] overflow-hidden">
              <Skeleton style={{ height: "100%" }} count={1} />
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-6 px-3 pt-6 lg:w-1/2 lg:pt-18">
        <h1 className="w-[50%] text-4xl leading-normal font-semibold">
          <Skeleton style={{ height: "100%" }} count={1} />
        </h1>
        <p className="text-sm text-gray-500">
          <Skeleton style={{ height: "50%" }} count={1} />
          <Skeleton style={{ height: "50%" }} count={1} />
        </p>
        <StyledLine />
        <div className="h-13 w-[40%]">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <StyledLine />
        <div className="h-7 w-[30%]">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-15 w-[50%]">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-7 w-[30%]">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="flex h-15 w-full items-center justify-between">
          <div className="h-full w-[20%]">
            <Skeleton style={{ height: "100%" }} count={1} />
          </div>
          <div className="h-full w-[20%]">
            <button
              disabled
              className="border-lightred hover:bg-lightred text-lightred h-[70%] w-full animate-pulse cursor-pointer rounded-full border-2 px-3 py-1 text-sm opacity-35 hover:text-white"
            >
              <Skeleton
                count={1}
                width={"100%"}
                baseColor=" #f35c7a "
                className="rounded-full"
              />
            </button>
          </div>
        </div>
        <StyledLine />
        <div className="h-8 w-[35%]">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-8">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-8">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-8">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-8">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
        <div className="h-8">
          <Skeleton style={{ height: "100%" }} count={1} />
        </div>
      </section>
    </>
  );
}

export default ProductSkeleton;
