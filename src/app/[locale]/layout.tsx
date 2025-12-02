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
  description:
    "Nicolas Andry - Photographe spécialisé en photographie argentique et développement naturel. Découvrez son travail artistique unique et ses techniques artisanales.",
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
  authors: [{ name: "Nicolas Andry" }],
  creator: "Nicolas Andry",
  publisher: "Nicolas Andry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nicolas-andry.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nicolas-andry.com",
    siteName: "Nicolas Andry",
    title: "Nicolas Andry - Photographe",
    description:
      "Nicolas Andry - Photographe spécialisé en photographie argentique et développement naturel. Découvrez son travail artistique unique et ses techniques artisanales.",
    images: [
      {
        url: OGImage.src,
        width: 1200,
        height: 630,
        alt: "Nicolas Andry - Photographe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Andry - Photographe",
    description:
      "Nicolas Andry - Photographe spécialisé en photographie argentique et développement naturel.",
    images: [OGImage.src],
    creator: "@nicolasandry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
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
                <Menu locale={locale} agendaCtaText={ctaData.agendaCTA} />
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
