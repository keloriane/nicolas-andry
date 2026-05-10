import type { Metadata } from "next";
import { playfare } from "../../font";
import { getAgendaData } from "../../../../sanity/lib/queries";

import Agenda from "@/components/Agenda";
import { DEFAULT_LOCALE, getAlternates, isLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return { alternates: getAlternates(locale, "agenda") };
}

export default async function AgendaPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const agendaData = await getAgendaData(locale);

  const agendaCreation = agendaData.creationEvents;
  const agendaAtelier = agendaData.atelierEvents;

  return (
    <div>
      <div style={{ padding: "50px 25px" }}>
        <Agenda
          titleAgendaCreation={agendaData.agendaMain.titleAgendaCreation}
          titleAgendaAtelier={agendaData.agendaMain.titleAgendaAtelier}
          locale={locale}
          introductionText={agendaData.agendaMain.introductionText}
          title={agendaData.agendaMain.title}
          cta={agendaData.agendaMain.agendaCTA}
          agendaCreation={agendaCreation}
          agendaAtelier={agendaAtelier}
          playfare={playfare.className}
          agendaPage={true}
        />
      </div>
    </div>
  );
}
