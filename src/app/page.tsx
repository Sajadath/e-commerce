import CategoryList from "@/components/homePage/category/CategoryList";
import ProductList from "@/components/homePage/product/ProductList";
import CustomCarousel from "@/components/homePage/slider/CustomCarousel";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <CustomCarousel />
      <ProductList />
      <CategoryList />
    </main>
  );
}
