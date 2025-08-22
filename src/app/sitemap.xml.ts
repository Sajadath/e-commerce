export async function GET() {
  const baseUrl = "https://shopper.sajadath.ir";

  // Static pages
  const staticPages = ["", "about", "search", "cart"];

  // Dynamic product pages (example: fetch product slugs/ids from DB or API)

  const productSlugs = [
    "f572e4d1-a214-d5f4-9143-c6613a619f8d",
    "dc536da9-c65e-e82c-0592-1fb12ba167a8",
    "3df47915-201e-9f2a-4779-dd4ad80bf4e5",
    "09353357-ca6e-2f10-c6a8-4c147e36dc48",
  ];

  const pages = [
    ...staticPages,
    ...productSlugs.map((slug) => `products/${slug}`),
  ];

  const urls = pages
    .map(
      (p) => `
  <url>
    <loc>${baseUrl}/${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
