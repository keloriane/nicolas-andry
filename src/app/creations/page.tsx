import React from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import PageHeader from "@/components/common/PageHeader";
import { playfare, archivo } from "./../font";

import PostContent from "@/components/common/PostContent";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import Agenda from "@/components/Agenda";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  getAgendaData,
} from "../../../sanity/lib/queries";
import { loadQuery } from "../../../sanity/lib/store";
import { AgendaType } from "@/types/AgendaType";

async function getCreationData() {
  return await client.fetch(
    groq`
    *[_type == "creations"] {
      title,
      introductionText,
      imageHeader,
      "posts": posts[] -> {title , slug}
    }
  `
  );
}

export default async function Creations() {
  const creations = await getCreationData();
  const creation = creations[0];
  const postsTitle = creation.posts;
  const agendaData = await getAgendaData();
  const agendaCreation = await loadQuery<AgendaType[]>(AGENDA_CREATION_QUERY);
  const agendaAtelier = await loadQuery<AgendaType[]>(AGENDA_ATELIER_QUERY);
  console.log(agendaCreation);

  return (
    <main>
      <Menu />

      <PageHeader
        playfare={playfare.className}
        title={creation.title}
        image={creation}
        introductionText={creation.introductionText[0].children[0].text}
      />

      <PostContent postsTitle={postsTitle} creation={creation} />
      <div style={{ paddingBottom: "100px", paddingTop: "100px" }}>
        <Agenda
          agendaPage
          introductionText={agendaData.introductionText}
          title={agendaData.title}
          playfare={playfare.className}
          agendaCreation={agendaCreation.data}
          agendaAtelier={agendaAtelier.data}
        />
      </div>
      <Footer />
    </main>
  );
}
