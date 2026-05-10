import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
// import "./../globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { FooterProvider } from "@/context/FooterContext";

import { NextIntlClientProvider } from "next-intl";
import Menu from "@/components/common/Menu";

import OGImage from "@/app/opengraph-image.png";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  getAgendaCTA,
  getAtelierNavData,
  getContactData,
  getFooterData,
  getMenuData,
  getNavigationData,
} from "../../../sanity/lib/queries";
import { archivo } from "../font";
import AgendaCta from "@/components/common/AgendaCta";
import { Analytics } from "@vercel/analytics/react";
import {
  DEFAULT_LOCALE,
  SITE_URL,
  isLocale,
  localeUrl,
  ogLocale,
} from "@/lib/seo";

const KEYWORDS = [
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
].join(", ");

const DESCRIPTION =
  "Nicolas Andry - Photographe spécialisé en photographie argentique et développement naturel. Découvrez son travail artistique unique et ses techniques artisanales.";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;

  return {
    title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
    description: DESCRIPTION,
    keywords: KEYWORDS,
    authors: [{ name: "Nicolas Andry" }],
    creator: "Nicolas Andry",
    publisher: "Nicolas Andry",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      url: localeUrl(locale),
      siteName: "Nicolas Andry",
      title: "Nicolas Andry - Photographe",
      description: DESCRIPTION,
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
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const [
    footerData,
    contactData,
    ctaData,
    menuItems,
    navigationData,
    atelierNavData,
  ] = await Promise.all([
    getFooterData(),
    getContactData(locale),
    getAgendaCTA(locale),
    getMenuData(locale),
    getNavigationData(),
    getAtelierNavData(),
  ]);
  const { contactCta, description, contactMail, cTitle } = contactData;
  const { cookie, droit } = footerData;

  return (
    <StyledComponentsRegistry>
      <NextIntlClientProvider locale={locale}>
        <MenuProvider menuItems={menuItems}>
          <FooterProvider
            navigationData={navigationData}
            atelierNavData={atelierNavData}
          >
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
        </MenuProvider>
      </NextIntlClientProvider>
    </StyledComponentsRegistry>
  );
}
