import OGImage from "@/app/opengraph-image.png";
import { Metadata } from "next";
import { DEFAULT_LOCALE, isLocale, localeUrl, ogLocale } from "@/lib/seo";

const KEYWORDS = [
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

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return {
    title: { default: "Nicolas Andry", template: "%s - Nicolas Andry" },
    description: "Nicolas Andry photographie",
    keywords: KEYWORDS,
    openGraph: {
      title: "Nicolas Andry",
      description:
        "Muer en gestes les questions, besoins, émotions. Pétrir ces matières, qui me pétrissent à leur tour.",
      url: localeUrl(locale, "creations"),
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
      locale: ogLocale(locale),
      type: "website",
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return <>{children}</>;
}
