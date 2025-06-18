import CategoryList from "@/components/homePage/category/CategoryList";
import NewestProducts from "@/components/homePage/product/NewestProduct";
import SpecialProductList from "@/components/homePage/product/SpecialProductList";
import CustomCarousel from "@/components/homePage/slider/CustomCarousel";
import NewestProductSkeletons from "@/components/Skeleton/NewestProductSkeleton";
import SpecialProductSkeletons from "@/components/Skeleton/SpecialProductSkeletons";
import { Suspense } from "react";

export const revalidate = 20;
// import { useWixClient } from "./hooks/useWixClient";
// import { wixClientServer } from "@/lib/wixClientServer";

export default async function HomePage() {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   async function getProducts() {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   }

  //   getProducts();
  // }, [wixclient]);

  // const wixClient = await wixClientServer();

  // console.log(wixClient?.products?.queryProducts()?.find());

  return (
    <main className="relative w-full overflow-x-hidden">
      <CustomCarousel />

      <Suspense fallback={<SpecialProductSkeletons limit={4} />}>
        <SpecialProductList limit={4} />
      </Suspense>
      <CategoryList />
      <Suspense fallback={<NewestProductSkeletons limit={4} />}>
        <NewestProducts limit={4} />
      </Suspense>
    </main>
  );
}
