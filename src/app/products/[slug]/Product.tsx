import { wixClientServer } from "@/lib/wixClientServer";
import ProductImages from "./_components/ProductImages";
import ProductDetail from "./ProductDetail";

interface ErrorFetchingProduct {
  message: string;
  details?: {
    applicationError?: {
      code: string | number;
    };
  };
}

async function Product({ ProductId }: { ProductId: string }) {
  const wixClient = await wixClientServer();

  let res;
  try {
    res = await wixClient.products.getProduct(ProductId);
  } catch (error) {
    const err = error as ErrorFetchingProduct;
    console.error("Error fetching product:", err);

    if (
      err?.details?.applicationError?.code === 404 ||
      err?.details?.applicationError?.code === "PRODUCT_NOT_FOUND"
    ) {
      return (
        <div className="flex h-screen w-full items-center justify-center">
          <h1 className="text-lightred text-2xl font-bold">
            محصول یافت نشد :(
          </h1>
        </div>
      );
    } else {
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
          <h1 className="text-lightred text-2xl font-bold">
            خطایی در بارگذاری محصول رخ داده است.
          </h1>
          <p className="w-[80%] text-gray-500">{err?.message}</p>
        </div>
      );
    }
  }

  const product = res?.product;

  if (!product) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-lightred text-2xl font-bold">محصول یافت نشد :(</h1>
      </div>
    );
  }

  return (
    <>
      {/* @ts-expect-error product will have these items */}
      <ProductImages imagesArray={product.media?.items} />
      {/* @ts-expect-error product will have these items */}
      <ProductDetail product={product} />
    </>
  );
}

export default Product;
