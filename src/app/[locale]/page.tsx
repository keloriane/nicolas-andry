import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { playfare, archivo } from "./../font";

import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import { getAgendaData, getHomeData } from "./../../../sanity/lib/queries";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

import dynamic from "next/dynamic";

import Menu from "@/components/common/Menu";
const Agenda = dynamic(() => import("@/components/Agenda"));

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [homeData, agendaData] = await Promise.all([
    getHomeData(locale),
    getAgendaData(locale),
  ]);

  const { title, subtitle, postGrid, introductionText } = homeData;
  const agendaCreation = agendaData.creationEvents;
  const agendaAtelier = agendaData.atelierEvents;

  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
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
        titleAgendaCreation={agendaData.agendaMain.titleAgendaCreation}
        titleAgendaAtelier={agendaData.agendaMain.titleAgendaAtelier}
        locale={locale}
        introductionText={agendaData.agendaMain.introductionText}
        title={agendaData.agendaMain.title}
        cta={agendaData.agendaMain.agendaCTA}
        agendaCreation={agendaCreation}
        agendaAtelier={agendaAtelier}
        playfare={playfare.className}
        homePage={false}
      />

      <Banner src={bannerImage} width={1120} height={316} />

      <AboutSection
        presentationTitle={homeData.presentationTitle}
        imageProfile={homeData.imageProfile}
        presentationText={homeData.presentationText}
        homePage
        locale={locale}
      />
      <Separator />
    </main>
  );
}
