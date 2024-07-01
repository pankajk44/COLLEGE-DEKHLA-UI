import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { footer, header } from "@/data/wrapperData";

export const metadata: Metadata = {
  title: "College Dakhla",
  description: "Find College that suits you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-500">
        <Header header={header} />
        {children}
        <Footer footer={footer} />
        </body>
    </html>
  );
}
