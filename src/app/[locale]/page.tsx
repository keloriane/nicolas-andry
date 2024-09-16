import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { playfare, archivo } from "./../font";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { loadQuery } from "@./../../sanity/lib/store";
import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  AGENDA_QUERY,
  GetAgendaData,
  HOME_QUERY,
} from "./../../../sanity/lib/queries";

import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

import { HomeData } from "@/types/HomeData";
import Agenda from "@/components/Agenda";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import Lenis from "lenis";

async function GetHomeData(lang: string = "fr") {
  const res = await loadQuery<HomeData>(HOME_QUERY, { lang });

  return res;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const homeData = await GetHomeData(locale);
  const {
    title,
    subtitle,
    postGrid,
    demarches,
    presentationText,
    introductionText,
  } = homeData.data;

  console.log("POSTGRID", postGrid);

  const agendaData = await GetAgendaData(locale);

  const agendaCreation = agendaData[1];
  const agendaAtelier = agendaData[2];

  return (
    <main>
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
        locale={locale}
      />
      <Agenda
        introductionText={agendaData[0].introductionText}
        title={agendaData[0].title}
        agendaCreation={agendaCreation}
        agendaAtelier={agendaAtelier}
        playfare={playfare.className}
        locale={locale}
        cta={agendaData[0].agendaCTA}
        homePage
      />

      <Banner src={bannerImage} width={1120} height={316} />

      <AboutSection
        presentationTitle={homeData.data.presentationTitle}
        imageProfile={homeData.data.imageProfile}
        presentationText={homeData.data.presentationText}
        homePage
        locale={locale}
      />
      <Separator />

      <Contact archivo={archivo.className} />
      <Footer locale={locale} />
    </main>
  );
}
