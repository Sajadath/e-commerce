import StyledLine from "@/components/ui/StyledLine";
import Add from "./_components/Add";
import CustomizeProduct from "./_components/CustomizeProduct";
import PriceBlock from "./_components/PriceBlock";
import ProductDescription from "./_components/ProductDescription";
import ProductHeading from "./_components/ProductHeading";
// import Add from "./_components/Add";

interface Product {
  name: string;
  description?: string;
  shortDescription?: string;
  convertedPriceData: {
    discountedPrice?: number;
    price: number;
  };
  productOptions?: ProductOptions;

  stock: {
    inStcok: boolean;
    quantity: number;
  };
}

export type ProductOptions = {
  name: string;
  choices: {
    value: string;
    description: string;
    inStock: boolean;
  }[];
}[];

function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="flex w-full flex-col gap-6 px-3 pt-6 lg:w-1/2 lg:pt-18">
      <ProductHeading
        productName={product.name}
        shortDescription={product.shortDescription}
      />
      <StyledLine />
      {product.stock.quantity > 0 ? (
        <>
          <PriceBlock
            discountedPrice={product.convertedPriceData.discountedPrice}
            price={product.convertedPriceData.price}
          />
          <StyledLine />
          <CustomizeProduct productOptions={product.productOptions} />
          <Add
            // @ts-expect-error product will have these items
            itemId={product._id}
            title={product.name}
            price={product.convertedPriceData.discountedPrice}
            // @ts-expect-error product will have these items
            imageUrl={product.media?.mainMedia?.image?.url || "/product.png"}
            stock={product.stock.quantity}
          />
        </>
      ) : (
        <div>
          <p className="text-center text-lg font-medium text-gray-400">
            در انبار موجود <span className="text-red-500">نیست</span>
          </p>
        </div>
      )}

      <StyledLine />
      {product.description && (
        <ProductDescription htmlString={product.description} />
      )}
    </section>
  );
}

export default ProductDetail;
