import type { Metadata } from "next";

import { Archivo } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Andry",
  description: "Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={archivo.className}>
        <StyledComponentsRegistry>
          <MenuProvider>
            <FooterProvider>{children}</FooterProvider>
          </MenuProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
