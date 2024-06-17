import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import Agenda from "@/components/Agenda";
import Procedures from "@/components/Procedures";
import { playfare, archivo } from "./font";
import Parcours from "@/components/Parcours";
import Contact from "@/components/Contact";
import Menu from "@/components/common/Menu";
import Footer from "@/components/Footer";
import { loadQuery } from "../../sanity/lib/store";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  AGENDA_QUERY,
  HOME_QUERY,
  MENU_QUERY,
} from "../../sanity/lib/queries";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import { MenuType } from "@/types/MenuType";

interface HomeData {
  title: string;
  subtitle: string;
  postGrid: [{ image: string; description: []; title: string; slug: string }];
  demarches: [{ title: string; description: [] }];
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
  procedureTitle: string;
  presentationTitle: string;
}

export default async function Home() {
  const homeData = await loadQuery<HomeData>(HOME_QUERY);
  const agendaData = await loadQuery<AgendaMain>(AGENDA_QUERY);
  const agendaCreation = await loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY);
  const agendaAtelier = await loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY);
  const menuData = await loadQuery<MenuType>(MENU_QUERY);

  const { title, subtitle, postGrid, demarches, parcours, presentationText } =
    homeData.data;

  return (
    <main>
      <Menu />
      <Hero
        title={title}
        subtitle={subtitle}
        clash={playfare.className}
        satoshi={archivo.className}
        presentationText={presentationText}
      />
      <PostsGrid
        posts={postGrid}
        playfare={playfare.className}
        archivo={archivo.className}
      />
      <Agenda
        introductionText={agendaData.data.introductionText}
        title={agendaData.data.title}
        agendaCreation={agendaCreation.data}
        agendaAtelier={agendaAtelier.data}
        playfare={playfare.className}
        homePage
      />
      <Procedures demarche={demarches} title={homeData.data.procedureTitle} />
      <Parcours
        presentationTitle={homeData.data.presentationTitle}
        parcours={parcours}
        imageProfile={homeData.data.imageProfile}
        presentationText={homeData.data.presentationText}
      />
      <Contact archivo={archivo.className} />
      <Footer />
    </main>
  );
}
