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
