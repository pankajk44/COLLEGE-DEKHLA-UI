import type { Metadata } from "next";
import ReduxProvider from "@/Redux/provider";
import { ApolloWrapper } from "@/lib/client";

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
      <body className="bg-orange-50">
        <ReduxProvider>
          <ApolloWrapper>
            <Header header={header} />
            {children}
            <Footer footer={footer} />
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
