import React from "react";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import PostContent from "@/components/common/PostContent";
import PageHeader from "@/components/common/PageHeader";
import { archivo, playfare } from "../font";
import Agenda from "@/components/Agenda";
import HeaderTree from "@/components/common/PageHeader/HeaderTree";
import agenda from "../../../sanity/schemaTypes/agenda";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  getAgendaData,
} from "../../../sanity/lib/queries";
import { loadQuery } from "./../../../sanity/lib/store";
import { AgendaType } from "@/types/AgendaType";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import Contact from "@/components/Contact";

async function getRechercheData() {
  return await client.fetch(
    groq`
    *[_type == "recherches"][0]{
      title,
      introductionText,
      imageHeader,
      "activePost": *[_type == "posts"][]->{
        title,
        content,
        'images': images[]{
          "url": asset->url,
          "alt": asset->alt
        }
      },
      "posts": posts[] -> {title , slug}
    }
  `
  );
}

export default async function Creations() {
  const researchData = await getRechercheData();
  const postsTitle = researchData.posts;
  const agendaData = await getAgendaData();
  const agendaCreation = await loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY);
  const agendaAtelier = await loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY);

  return (
    <main>
      <Menu />
      {/* <PageHeader
        image={researchData}
        playfare={playfare.className}
        title={researchData.title}
        introductionText={researchData.introductionText[0].children[0].text}
      /> */}
      <FullHeader
        image={researchData}
        playfare={playfare.className}
        title={researchData.title}
        introductionText={researchData.introductionText[0].children[0].text}
      />
      <PostContent postsTitle={postsTitle} />
      <Agenda
        agendaPage
        introductionText={agendaData.introductionText}
        title={agendaData.title}
        playfare={playfare.className}
        agendaCreation={agendaCreation.data}
        agendaAtelier={agendaAtelier.data}
      />
    </main>
  );
}
