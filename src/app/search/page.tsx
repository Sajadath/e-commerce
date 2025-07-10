import Heading from "./Heading";
import Campaign from "./Campaign";
import Filter from "./Filter";
import SearchInProducts from "./SearchInProducts";
import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";
import { Suspense } from "react";
import SearchInProductsSkeleton from "./SearchInProductsSkeleton";

export const revalidate = 0;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const wixClient = await wixClientServerVisitors();
  const { categorySlug, searchTitle, productName } = await searchParams;
  let categoryId: string | null | undefined;

  if (categorySlug) {
    try {
      const categoryDetail = await wixClient.collections.getCollectionBySlug(
        categorySlug as string,
      );
      categoryId = categoryDetail.collection?._id;
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error instanceof Error) {
        return (
          <div className="py-30 text-center">
            <h2>خطا در بارگذاری دسته بندی محصولات</h2>
            {/* @ts-expect-error detail exists*/}
            {error?.details?.applicationError?.code === "CATEGORY_NOT_FOUND" ? (
              <p className="mx-auto w-80">دسته بندی مورد نظر یافت نشد</p>
            ) : (
              <p className="mx-auto w-80">{error.message}</p>
            )}
          </div>
        );
      }
    }
  }

  return (
    <main className="w-full px-4 py-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Campaign />
      <Filter />
      <Heading
        searchTitle={
          (searchTitle as string) ||
          (productName as string) ||
          "جستجو در محصولات"
        }
      />
      {categorySlug && categoryId ? (
        <Suspense fallback={<SearchInProductsSkeleton />}>
          <SearchInProducts categoryId={categoryId} />
        </Suspense>
      ) : (
        categorySlug &&
        !categoryId && (
          <div className="py-30 text-center">
            <h2> دسته بندی محصولات یافت نشد</h2>
          </div>
        )
      )}
      {productName && (
        <Suspense fallback={<SearchInProductsSkeleton />}>
          <SearchInProducts productName={productName as string} />
        </Suspense>
      )}
    </main>
  );
}
