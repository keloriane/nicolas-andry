import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { playfare, archivo } from "./../font";
import { loadQuery } from "@./../../sanity/lib/store";
import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import {
  FOOTER_QUERY,
  GetAgendaData,
  getContactData,
  HOME_QUERY,
} from "./../../../sanity/lib/queries";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";
import { HomeData } from "@/types/HomeData";
import { FooterData } from "@/types/ContactData";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Agenda = dynamic(() => import("@/components/Agenda"));

async function GetHomeData(lang: string = "fr") {
  const res = await loadQuery<HomeData>(HOME_QUERY, { lang });

  return res;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [homeData, agendaData] = await Promise.all([
    GetHomeData(locale),
    GetAgendaData(locale),
  ]);

  const { title, subtitle, postGrid, introductionText } = homeData.data;

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
    </main>
  );
}
