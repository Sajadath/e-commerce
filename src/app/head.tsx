import React from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shopper.sajadath.ir/about/#organization",
      name: "Shopper",
      url: "https://shopper.sajadath.ir/",
      logo: "https://shopper.sajadath.ir/mainlogo.jpg",
      sameAs: ["https://www.facebook.com/your", "https://twitter.com/your"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+98-9114909575",
          contactType: "customer service",
          areaServed: "IR",
          availableLanguage: ["Persian", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shopper.sajadath.ir/#website",
      url: "https://shopper.sajadath.ir/",
      name: "Shopper",
      publisher: { "@id": "https://shopper.sajadath.ir/about/#organization" },
      inLanguage: "fa",
    },
  ],
};

export default function Head() {
  return (
    <>
      <meta name="google-site-verification" content="PUT_YOUR_TOKEN_HERE" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
