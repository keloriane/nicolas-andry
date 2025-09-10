import type { Metadata } from "next";

import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"] });

import OGImage from "@/app/opengraph-image.png";
import { HotJar } from "@/components/Hotjar";
export const metadata: Metadata = {
  title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
  description: "Nicolas andry photographie",
  metadataBase: new URL("https://nicolas-andry.com"),
  openGraph: {
    title: "Nicolas Andry",
    description:
      "Muer en gestes les questions, besoins, émotions. Pétrir ces matières, qui me pétrissent à leur tour.",
    url: "https://nicolas-andry.com",
    siteName: "Nicolas Andry",
    images: [
      {
        url: OGImage.src,
        width: 800,
        height: 600,
      },
      {
        url: OGImage.src,
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "fr_BE",
    type: "website",
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
      <body className={archivo.className}>{children}</body>
      <HotJar />
    </html>
  );
}
