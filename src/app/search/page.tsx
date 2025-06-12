import Campaign from "./Campaign";
import Filter from "./Filter";
import ProductsList from "./ProductsList";

export default function ListPage() {
  return (
    <main className="w-full px-4 py-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Campaign />
      <Filter />
      <h2 className="my-8 text-xl font-semibold"> کفش های شما </h2>
      <ProductsList />
    </main>
  );
}
