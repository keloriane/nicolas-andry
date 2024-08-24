import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./../globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";

import { NextIntlClientProvider } from "next-intl";
import Menu from "@/components/common/Menu";
import { LanguageProvider } from "@/context/LanguageContext";

import { AgendaDataProvider } from "@/context/AgendaContext";

export const metadata: Metadata = {
  title: { default: "Accueil", template: "%s - Nicolas Andry" },
  description: "Nicolas andry photographie",
  openGraph: {
    images: '/og-image.png',
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
    <StyledComponentsRegistry>
      <NextIntlClientProvider locale={locale}>
        <LanguageProvider>
          <MenuProvider locale={locale}>
            <AgendaDataProvider locale={locale}>
              <FooterProvider>
                <Menu locale={locale} />
                {children}
              </FooterProvider>
            </AgendaDataProvider>
          </MenuProvider>
        </LanguageProvider>
      </NextIntlClientProvider>
    </StyledComponentsRegistry>
  );
}
