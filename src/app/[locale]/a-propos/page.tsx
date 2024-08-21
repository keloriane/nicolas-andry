import Menu from "@/components/common/Menu";
import Procedures from "@/components/Procedures";
import React from "react";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  AGENDA_QUERY,
  DEMARCHE_QUERY,
  PARCOURS_QUERY,
} from "../../../../sanity/lib/queries";
import Parcours from "@/components/Parcours";
import { loadQuery } from "../../../../sanity/lib/store";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";
import Agenda from "@/components/Agenda";
import Contact from "@/components/Contact";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import { archivo, playfare } from "@/app/font";

interface ParcoursData {
  parcours: [{ year: string; description: [] }];
  presentationTitle: string;
  imageProfile: string;
  presentationText: [];
}
interface ProceduresData {
  demarches: [{ title: string; description: [] }];

  procedureTitle: string;
}

async function GetAgendaData(lang: string = "fr") {
  const agendaData = await Promise.all([
    loadQuery<AgendaMain>(AGENDA_QUERY),
    loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY),
    loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY),
  ]);

  return agendaData;
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const parcours = await loadQuery<ParcoursData>(PARCOURS_QUERY);
  const procedures = await loadQuery<ProceduresData>(DEMARCHE_QUERY);
  const agendaData = await Promise.all([
    loadQuery<AgendaMain>(AGENDA_QUERY),
    loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY),
    loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY),
  ]);

  const agendaCreation = agendaData[1];
  const agendaAtelier = agendaData[2];
  return (
    <div>
      <section style={{ paddingTop: "150px" }}>
        <AboutSection
          presentationTitle={parcours.data.presentationTitle}
          imageProfile={parcours.data.imageProfile}
          homePage={false}
          presentationText={parcours.data.presentationText}
        />
        <Separator />
        <Parcours
          presentationTitle={parcours.data.presentationTitle}
          parcours={parcours.data.parcours}
          imageProfile={parcours.data.imageProfile}
          presentationText={parcours.data.presentationText}
        />
        <Separator size={100} />
        <Procedures
          demarche={procedures.data.demarches}
          title={procedures.data.procedureTitle}
          locale={locale}
        />
        <Agenda
          introductionText={agendaData[0].data.introductionText}
          title={agendaData[0].data.title}
          agendaCreation={agendaCreation.data}
          agendaAtelier={agendaAtelier.data}
          playfare={playfare.className}
          homePage
        />
        <Separator size={100} />
        <Contact archivo={archivo.className} />
      </section>
    </div>
  );
}
