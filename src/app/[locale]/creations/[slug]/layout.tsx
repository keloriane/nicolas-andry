import StyledComponentsRegistry from "@/lib/registry";
import {
  getAgendaCTA,
  getContactData,
  getFooterData,
} from "../../../../../sanity/lib/queries";
import { NextIntlClientProvider } from "next-intl";
import { LanguageProvider } from "@/context/LanguageContext";
import { MenuProvider } from "@/context/MenuContext";
import { AgendaDataProvider } from "@/context/AgendaContext";
import { FooterProvider } from "@/context/FooterContext";
import AgendaCta from "@/components/common/AgendaCta";
import OGImage from "@/app/opengraph-image.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
  description: "Nicolas Andry photographie",
  keywords: [
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
        alt: "Photographie argentique et développement écologique",
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

  return (
    <StyledComponentsRegistry>
      <NextIntlClientProvider locale={locale}>
        <LanguageProvider>
          <MenuProvider locale={locale}>
            <AgendaDataProvider locale={locale}>
              <FooterProvider>{children}</FooterProvider>
            </AgendaDataProvider>
          </MenuProvider>
        </LanguageProvider>
      </NextIntlClientProvider>
    </StyledComponentsRegistry>
  );
}
