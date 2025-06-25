import React from "react";
import ProductImages from "./_components/ProductImages";
import ProductDetail from "./ProductDetail";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-2 md:px-3 lg:flex-row lg:px-5 xl:px-6 2xl:px-7">
      <ProductImages />
      <ProductDetail />
    </main>
  );
}
