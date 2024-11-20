import { playfare } from "../../font";
import { getAgendaData } from "../../../../sanity/lib/queries";

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
      <div style={{ padding: "150px 25px" }}>
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
