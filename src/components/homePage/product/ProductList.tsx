import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
      <h2 className="mt-10 px-4 py-14 text-2xl font-semibold md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        محصولات ویژه
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default ProductList;
