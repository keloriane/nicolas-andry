import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import Agenda from "@/components/Agenda";
import { archivo, playfare } from "../../font";
import { GetAgendaData } from "../../../../sanity/lib/queries";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function AgendaPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const agendaData = await GetAgendaData(locale);

  console.log(agendaData);

  const agendaCreation = agendaData[1];
  const agendaAtelier = agendaData[2];

  return (
    <div>
      <div style={{ paddingTop: "150px" }}>
        <Agenda
          introductionText={agendaData[0].introductionText}
          title={agendaData[0].title}
          agendaCreation={agendaCreation}
          agendaAtelier={agendaAtelier}
          playfare={playfare.className}
          homePage={false}
        />
        <Contact archivo={archivo.className} />
        <Footer locale={locale} />
      </div>
    </div>
  );
}
