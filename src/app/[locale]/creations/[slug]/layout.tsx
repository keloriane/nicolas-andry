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
import Menu from "@/components/common/Menu";
import AgendaCta from "@/components/common/AgendaCta";
import Contact from "@/components/Contact";
import { archivo } from "@/app/font";
import Footer from "@/components/Footer";

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
