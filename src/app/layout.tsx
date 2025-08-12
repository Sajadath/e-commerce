import Footer from "@/components/footer/Footer";
import NavbarProvider from "@/components/navbar/NavbarProvider";
import ToastProvider from "@/components/ui/ToastProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${bYekan.className} flex min-h-dvh w-screen grid-rows-[auto_1fr_auto] flex-col overflow-x-hidden`}
      >
        <NavbarProvider />
        <ToastProvider>{children}</ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
