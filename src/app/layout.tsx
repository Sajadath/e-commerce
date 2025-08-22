import Footer from "@/components/footer/Footer";
import NavbarProvider from "@/components/navbar/NavbarProvider";
import ToastProvider from "@/components/ui/ToastProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bYekan = localFont({ src: "./Iranyekan.ttf" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shopper.sajadath.ir/"),
  title: {
    default: "Shopper",
    template: "%s - Shopper",
  },
  description: "وبسایتی برای خرید محصولات آنلاین به راحتی یک کلیک.",
  keywords: [
    "خرید آنلاین",
    "فروشگاه",
    "Shopper",
    "ایران",
    "محصولات",
    "شاپر",
    "Vast Shopper",
  ],
  authors: [{ name: "Shopper", url: "https://shopper.sajadath.ir/about" }],
  creator: "Shopper",
  publisher: "Shopper",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shopper",
    description: "وبسایتی برای خرید آنلاین.",
    url: "https://shopper.sajadath.ir",
    siteName: "Shopper",
    images: [
      {
        url: "https://shopper.sajadath.ir/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopper - خرید آنلاین",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopper",
    description: "وبسایتی برای خرید آنلاین.",
    images: ["https://shopper.sajadath.ir/og-image.png"],
    site: "@sajadath1",
    creator: "@sajadath1",
  },
  icons: {
    icon: "/mainlogo.jpg",
    shortcut: "/favicon.ico",
    apple: "/mainlogo.jpg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://shopper.sajadath.ir/",
    languages: {
      "fa-IR": "/",
      "en-US": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className={`${bYekan.className} flex min-h-dvh w-screen grid-rows-[auto_1fr_auto] flex-col overflow-x-hidden`}
      >
        <NavbarProvider />
        <ToastProvider>{children}</ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
