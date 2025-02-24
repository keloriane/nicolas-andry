import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { playfare, archivo } from "./../font";

import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import {
  getAgendaData,
  getBanner,
  getHomeData,
} from "./../../../sanity/lib/queries";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

import { urlFor } from "@/lib/imageBuilder";
import Agenda from "@/components/Agenda";
import { urlForImage } from "../../../sanity/lib/image";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [homeData, agendaData, bannerData] = await Promise.all([
    getHomeData(locale),
    getAgendaData(locale),
    getBanner(),
  ]);

  const { title, subtitle, postGrid, introductionText, imageHeader } = homeData;

  const agendaCreation = agendaData.creationEvents;
  const agendaAtelier = agendaData.atelierEvents;

  console.log(urlFor(bannerData[0].image).url());

  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        satoshi={archivo.className}
        presentationText={introductionText}
        image={urlFor(imageHeader).url()}
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
        homePage={true}
      />

      <Banner
        src={urlFor(bannerData[0].image).url()}
        width={1120}
        height={316}
      />

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
