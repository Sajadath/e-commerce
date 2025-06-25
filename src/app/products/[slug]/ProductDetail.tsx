import StyledLine from "@/components/ui/StyledLine";
import Add from "./_components/Add";
import CustomizeProduct from "./_components/CustomizeProduct";
import PriceBlock from "./_components/PriceBlock";
import ProductDescription from "./_components/ProductDescription";
import ProductHeading from "./_components/ProductHeading";

function ProductDetail() {
  return (
    <section className="flex w-full flex-col gap-6 px-3 pt-6 lg:w-1/2 lg:pt-18">
      <ProductHeading />
      <StyledLine />
      <PriceBlock />
      <StyledLine />
      <CustomizeProduct />
      <Add />
      <StyledLine />
      <ProductDescription />
    </section>
  );
}

export default ProductDetail;
