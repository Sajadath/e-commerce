import React from "react";
import ProductImages from "./_components/ProductImages";
import ProductDetail from "./ProductDetail";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      <ProductImages />
      <ProductDetail />
    </main>
  );
}
