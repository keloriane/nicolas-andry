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
import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  AGENDA_QUERY,
  HOME_QUERY,
} from "../../sanity/lib/queries";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";
import { NAVIGATION_QUERYType } from "@/types";

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
  navigation: NAVIGATION_QUERYType[];
  introductionText: [];
}

export default async function Home() {
  const [homeData, agendaData, agendaCreation, agendaAtelier] =
    await Promise.all([
      loadQuery<HomeData>(HOME_QUERY),
      loadQuery<AgendaMain>(AGENDA_QUERY),
      loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY),
      loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY),
    ]);

  const {
    title,
    subtitle,
    postGrid,
    demarches,
    presentationText,
    introductionText,
  } = homeData.data;

  console.log("homeData", homeData.data);

  return (
    <main>
      <Menu />
      <Hero
        title={title}
        subtitle={subtitle}
        clash={playfare.className}
        satoshi={archivo.className}
        presentationText={introductionText}
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
      <Separator size={100} />

      <Banner src={bannerImage} width={1120} height={316} />
      <Separator size={100} />

      <AboutSection
        presentationTitle={homeData.data.presentationTitle}
        imageProfile={homeData.data.imageProfile}
        presentationText={homeData.data.presentationText}
      />

      <Separator />
      {/* <Procedures demarche={demarches} title={homeData.data.procedureTitle} /> */}

      <Contact archivo={archivo.className} />
      <Footer />
    </main>
  );
}
