import type { Metadata } from "next";

import { Archivo } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";

const archivo = Archivo({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import Menu from "@/components/common/Menu";
import { LanguageProvider } from "@/context/LanguageContext";
import Head from "next/head";

export const metadata: Metadata = {
  title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
  description: "Nicolas andry photographie",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale || "fr"}>
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
