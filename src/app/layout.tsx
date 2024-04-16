import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Start Boilerplate",
  description: "Next app starter for future projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={archivo.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
