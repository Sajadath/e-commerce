import { wixClientServer } from "@/lib/wixClientServer";
import ProductCard from "./ProductCard";

const PRODUCT_PER_PAGE = 20;

async function SpecialProductList({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit ?? PRODUCT_PER_PAGE)
    .find();
  const products = res.items;
  console.log(products);

  return (
    <>
      <h2 className="mt-10 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        محصولات ویژه
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-32 2xl:grid-cols-4 2xl:px-64">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.numericId}
              slug={product?.slug}
              productName={product?.name}
              price={product?.priceData?.price}
              primaryImageUrl={product?.media?.mainMedia?.image?.url}
              shortDescription={
                product?.additionalInfoSections?.find(
                  (section) => section.title === "Short Description",
                )?.description || ""
              }
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
