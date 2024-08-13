import type { Metadata } from "next";

import { Archivo } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";
import { LanguageProvider } from "@/context/LanguageContext";

const archivo = Archivo({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Nicolas Andry",
  description: "Photography",
};

export default function RootLayout({
  children,
  params: { local },
}: Readonly<{
  children: React.ReactNode;
  params: { local: string };
}>) {
  return (
    <html lang={local}>
      <body className={archivo.className}>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <NextIntlClientProvider locale={local}>
              <MenuProvider>
                <FooterProvider>{children}</FooterProvider>
              </MenuProvider>
            </NextIntlClientProvider>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
