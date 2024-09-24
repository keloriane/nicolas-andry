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
import Footer from "@/components/Footer";
import { Metadata } from "next";
import AgendaCta from "@/components/common/AgendaCta";

interface ParcoursData {
  parcours: [{ year: string; description: [] }];
  presentationTitle: string;
  imageProfile: string;
  presentationText: [];
}
interface ProceduresData {
  demarches: [{ title: string; description: [] }];

  procedureTitle: string;
  procedureText: string;
}

export const metadata: Metadata = {
  title: "A propos",
  description: "Photography",
};

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const parcours = await loadQuery<ParcoursData>(PARCOURS_QUERY);
  const procedures = await loadQuery<ProceduresData>(DEMARCHE_QUERY);

  return (
    <div>
      <section style={{ paddingTop: "150px" }}>
        <AboutSection
          presentationTitle={parcours.data.presentationTitle}
          imageProfile={parcours.data.imageProfile}
          homePage={false}
          presentationText={parcours.data.presentationText}
        />

        <Procedures
          demarche={procedures.data.demarches}
          title={procedures.data.procedureTitle}
          text={procedures.data.procedureText}
          locale={locale}
        />

        <Parcours
          presentationTitle={parcours.data.presentationTitle}
          parcours={parcours.data.parcours}
          imageProfile={parcours.data.imageProfile}
          presentationText={parcours.data.presentationText}
        />

        <Separator size={100} />
        <AgendaCta text="" locale={locale} />
        <Separator size={100} />
        <Contact archivo={archivo.className} />
        <Footer locale={locale} />
      </section>
    </div>
  );
}
