import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ToastProvider from "@/components/ui/ToastProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WixClientContextProvider } from "@/context/WixContext";

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
        <WixClientContextProvider>
          <Navbar />
          <ToastProvider>{children}</ToastProvider>
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
