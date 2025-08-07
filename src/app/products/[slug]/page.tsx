import { Suspense } from "react";
import ProductSkeleton from "./_components/ProductSkeleton";
import Product from "./Product";
export const revalidate = 0;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex max-w-screen flex-col gap-16 overflow-x-hidden px-2 md:px-3 lg:flex-row lg:px-5 xl:px-6 2xl:px-7">
      <Suspense fallback={<ProductSkeleton />}>
        <Product ProductId={slug} />
      </Suspense>
    </main>
  );
}
