import Footer from "@/components/Footer";
import AgendaCard from "@/components/common/AgendaCard";
import Menu from "@/components/common/Menu";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Agenda from "@/components/Agenda";
import { archivo, playfare } from "../font";
import { loadQuery } from "./../../../sanity/lib/store";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
} from "./../../../sanity/lib/queries";
import { AgendaType } from "@/types/AgendaType";
import Contact from "@/components/Contact";

async function getAgendaData() {
  return await client.fetch(
    groq`*[_type == "agenda"][0]{title, introductionText}`
  );
}

export default async function AgendaPage() {
  const agendaData = await getAgendaData();
  const agendaCreation = await loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY);
  const agendaAtelier = await loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY);

  return (
    <div>
      <Menu />
      <div style={{ paddingTop: "150px", paddingBottom: "150px" }}>
        <Agenda
          homePage
          introductionText={agendaData.introductionText}
          title={agendaData.title}
          playfare={playfare.className}
          agendaCreation={agendaCreation.data}
          agendaAtelier={agendaAtelier.data}
        />
      </div>
    </div>
  );
}
