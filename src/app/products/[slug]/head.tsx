import { wixClientServerVisitors } from "@/lib/wixClientServerVisitors";
import React from "react";

interface ErrorFetchingProduct {
  message: string;
  details?: {
    applicationError?: {
      code: string | number;
    };
  };
}

export default async function Head({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const wixClient = await wixClientServerVisitors();

  let res;
  try {
    res = await wixClient.products.getProduct(slug);
  } catch (error) {
    const err = error as ErrorFetchingProduct;
    console.error("Error fetching product:", err);

    throw new Error("Failed to fetch product");
  }

  const product = res.product;
  if (!product) {
    throw new Error("Product not found");
  }

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.media?.items?.[0]?.image?.url || [
      `https://shopper.sajadath.ir/og-image.png`,
    ],
    description: product.description,
    sku: product.sku || product._id,
    brand: {
      "@type": "Brand",
      name: product.brand || "Shopper",
    },
    offers: {
      "@type": "Offer",
      url: `https://shopper.sajadath.ir/products/${slug}`,
      priceCurrency: "IRR",
      price: product.price?.toString() ?? "0",
      availability:
        product.stock?.quantity && product.stock?.quantity > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <title>{product.name} - Shopper</title>
      <meta name="description" content={product.name || "توضیحات"} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
