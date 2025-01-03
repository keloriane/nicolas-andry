import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
// import "./../globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";

import { NextIntlClientProvider } from "next-intl";
import Menu from "@/components/common/Menu";
import { LanguageProvider } from "@/context/LanguageContext";

import { AgendaDataProvider } from "@/context/AgendaContext";
import OGImage from "@/app/opengraph-image.png";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  getAgendaCTA,
  getContactData,
  getFooterData,
} from "../../../sanity/lib/queries";
import { archivo } from "../font";
import AgendaCta from "@/components/common/AgendaCta";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
  description: "Nicolas andry photographie",
  openGraph: {
    title: "Nicolas Andry",
    description:
      "Muer en gestes les questions, besoins, émotions. Pétrir ces matières, qui me pétrissent à leur tour.",
    url: "https://nicolas-andry.vercel.app",
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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const [footerData, contactData, ctaData] = await Promise.all([
    getFooterData(),
    getContactData(locale),
    getAgendaCTA(locale),
  ]);
  const { contactCta, description, contactMail, cTitle } = contactData;
  const { cookie, droit } = footerData;
  const { cta } = ctaData;

  return (
    <StyledComponentsRegistry>
      <NextIntlClientProvider locale={locale}>
        <LanguageProvider>
          <MenuProvider locale={locale}>
            <AgendaDataProvider locale={locale}>
              <FooterProvider>
                <Analytics />
                <Menu locale={locale} />
                {children}
                <AgendaCta text={ctaData.agendaCTA} locale={locale} />
                <Contact
                  mail={contactMail}
                  cta={contactCta}
                  description={description}
                  title={cTitle}
                  archivo={archivo.className}
                />
                <Footer cookie={cookie} droit={droit} locale={locale} />
              </FooterProvider>
            </AgendaDataProvider>
          </MenuProvider>
        </LanguageProvider>
      </NextIntlClientProvider>
    </StyledComponentsRegistry>
  );
}
