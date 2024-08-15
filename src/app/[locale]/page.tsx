import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";

import { playfare, archivo } from "./../font";

import Contact from "@/components/Contact";
import Menu from "@/components/common/Menu";
import Footer from "@/components/Footer";
import { loadQuery } from "@./../../sanity/lib/store";
import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import { HOME_QUERY } from "./../../../sanity/lib/queries";

import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

import { HomeData } from "@/types/HomeData";

async function GetHomeData(lang: string = "fr") {
  const res = await loadQuery<HomeData>(HOME_QUERY, { lang });

  return res;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const [homeData, agendaData, agendaCreation, agendaAtelier] =
  //   await Promise.all([
  //     loadQuery<HomeData>(HOME_QUERY),
  //     loadQuery<AgendaMain>(AGENDA_QUERY),
  //     loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY),
  //     loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY),
  //   ]);

  const homeData = await GetHomeData(locale);
  const {
    title,
    subtitle,
    postGrid,
    demarches,
    presentationText,
    introductionText,
  } = homeData.data;

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
      />
      {/* <Agenda
        introductionText={agendaData.data.introductionText}
        title={agendaData.data.title}
        agendaCreation={agendaCreation.data}
        agendaAtelier={agendaAtelier.data}
        playfare={playfare.className}
        homePage
      /> */}
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
