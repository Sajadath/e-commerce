import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";
import ProductCard from "./ProductCard";

async function SpecialProductList({ limit }: { limit?: number }) {
  const PRODUCT_PER_PAGE = Number(process.env.PRODUCT_PER_PAGE);
  const categoryId = process.env.SPECIAL_PRODUCTS_CATEGORY_ID!;
  const wixClient = await wixClientServerVisitors();
  let res;
  try {
    res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit ?? PRODUCT_PER_PAGE)
      .find();
  } catch (error) {
    console.error("Error fetching newest products:", error);
    console.log("error fetching newest Products", error);

    return (
      <div className="mx-auto my-5 w-full border-b-2 border-red-500 bg-red-300/50 px-10 py-15 text-center">
        <p className="w-full text-2xl font-semibold">
          خطا در بارگذاری محصولات تازه
        </p>
        {error instanceof Error &&
          "message" in error &&
          (error.message as string)}
      </div>
    );
  }

  const products = res?.items;

  return (
    <>
      <h2 className="mt-10 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        محصولات ویژه
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-32 2xl:grid-cols-4 2xl:px-64">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.numericId}
              slug={product?.slug}
              productName={product?.name}
              price={product?.priceData?.price}
              primaryImageUrl={product?.media?.mainMedia?.image?.url}
            />
          ))
        ) : (
          <p className="w-full p-8 text-center text-2xl font-semibold">
            محصولی یافت نشد
          </p>
        )}
      </div>
    </>
  );
}

export default SpecialProductList;
