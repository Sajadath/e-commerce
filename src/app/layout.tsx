import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const bYekan = localFont({ src: "./Iranyekan.ttf" });

export const metadata: Metadata = {
  title: {
    default: "Shopper",
    template: "%s - Shopper",
  },
  description: "وبسایتی برای خرید آنلاین.",
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
        className={`${bYekan.className} grid min-h-dvh grid-rows-[auto_1fr_auto]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
