import ProductCard from "@/components/homePage/product/ProductCard";
import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";

interface SearchProductsListProps {
  categoryId?: string;
  limit?: number;
}

async function SearchInProducts({
  categoryId,
  limit,
}: SearchProductsListProps) {
  const wixClient = await wixClientServerVisitors();
  let res;
  try {
    res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit ?? 10)
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 2xl:grid-cols-4">
        {products?.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              delay={index * 0.2}
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

export default SearchInProducts;
