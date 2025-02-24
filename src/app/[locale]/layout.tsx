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
  description: "Nicolas Andry photographie",
  keywords: [
    "acide",
    "acide acétique",
    "acide ascorbique",
    "argentique",
    "art",
    "artiste",
    "artistique",
    "artisanat",
    "artisan",
    "artisanal",
    "atelier",
    "baryté",
    "bio",
    "biologique",
    "caffenol",
    "carbonate de soude",
    "chercheur",
    "chlorure de sodium",
    "conférence",
    "conférencier",
    "développement",
    "écologie",
    "éthique",
    "exposition",
    "fait main",
    "film",
    "fixateur",
    "fixation",
    "hyposulfite de sodium",
    "manuel",
    "naturel",
    "noir et blanc",
    "photographe",
    "photographie",
    "récolté",
    "révélateur",
    "tirage",
    "végétal",
    "vitamine C",
  ].join(", "),
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
