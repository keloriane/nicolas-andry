import { archivo, playfare } from "../../font";
import { getAgendaData } from "../../../../sanity/lib/queries";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Agenda from "@/components/Agenda";

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
      <div style={{ paddingTop: "150px" }}>
        <Agenda
          locale={locale}
          introductionText={agendaData.agendaMain.introductionText}
          title={agendaData.agendaMain.title}
          cta={agendaData.agendaMain.agendaCTA}
          agendaCreation={agendaCreation}
          agendaAtelier={agendaAtelier}
          playfare={playfare.className}
          homePage={false}
        />
      </div>
    </div>
  );
}
