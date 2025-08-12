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
    <main className="flex max-w-screen flex-col gap-8 px-3 md:px-5 lg:flex-row lg:px-8 xl:px-10 2xl:px-7">
      <Suspense fallback={<ProductSkeleton />}>
        <Product ProductId={slug} />
      </Suspense>
    </main>
  );
}
