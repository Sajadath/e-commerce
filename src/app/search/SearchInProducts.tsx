import ProductCard from "@/components/homePage/product/ProductCard";
import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";

const limit = 10;

interface SearchProductsListPropsWithCategoryId {
  categoryId: string;
}
interface SearchProductsListPropsWithProductName {
  productName: string;
}

type ProductDetail = {
  stock:
    | {
        quantity: number;
      }
    | undefined;
  numericId: number;
  slug: string;
  _id: string;
  name: string;
  price: {
    discountedPrice: number | null;
  } | null;
  priceData: {
    price: number;
  };
  media: {
    mainMedia: {
      image: {
        url: string;
      };
    };
  };
};

type ProductArray = ProductDetail[];

async function SearchInProducts(
  props:
    | SearchProductsListPropsWithCategoryId
    | SearchProductsListPropsWithProductName,
) {
  const wixClient = await wixClientServerVisitors();
  let res;
  if ("categoryId" in props && props.categoryId) {
    try {
      res = await wixClient.products
        .queryProducts()
        .eq("collectionIds", props.categoryId)
        .limit(limit)
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
  }

  if ("productName" in props && props.productName) {
    try {
      res = await wixClient.products
        .queryProducts()
        // @ts-expect-error contains exists
        .contains("name", props.productName)
        .limit(limit)
        .find();
    } catch (error) {
      console.error("Error fetching products:", error);
      console.log("error fetching products", error);

      return (
        <div className="mx-auto my-5 w-full border-b-2 border-red-500 bg-red-300/50 px-10 py-15 text-center">
          <p className="w-full text-2xl font-semibold">
            خطا در بارگذاری محصولات
          </p>
          {error instanceof Error &&
            "message" in error &&
            (error.message as string)}
        </div>
      );
    }
  }

  const products = (res?.items as ProductArray) || [];

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 2xl:grid-cols-4">
        {products?.length > 0 &&
          products.map((product, index) => {
            const isAvailable = !!product?.stock?.quantity;
            return (
              <ProductCard
                isAvailable={isAvailable}
                maxQuantity={product.stock?.quantity || 10}
                itemId={product._id!}
                delay={index * 0.2}
                key={product.numericId}
                slug={product?._id || "404"}
                productName={product?.name || "محصول"}
                price={
                  product.price?.discountedPrice ||
                  product?.priceData?.price ||
                  0
                }
                primaryImageUrl={product?.media?.mainMedia?.image?.url}
              />
            );
          })}
      </div>

      {products?.length === 0 && (
        <p className="w-full p-8 text-center text-2xl font-semibold">
          محصولی یافت نشد
        </p>
      )}
    </>
  );
}

export default SearchInProducts;
