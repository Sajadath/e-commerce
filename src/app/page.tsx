import CategoryList from "@/components/homePage/category/CategoryList";
import NewestProducts from "@/components/homePage/product/NewestProduct";
import SpecialProductList from "@/components/homePage/product/SpecialProductList";
import CustomCarousel from "@/components/homePage/slider/CustomCarousel";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <CustomCarousel />
      <SpecialProductList />
      <CategoryList />
      <NewestProducts />
    </main>
  );
}
