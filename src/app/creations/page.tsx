import React, { Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import dynamic from "next/dynamic";
import PageHeader from "@/components/common/PageHeader";
import { playfare, archivo } from "./../font";
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
import FullHeader from "@/components/common/PageHeader/FullHeader";
import Contact from "@/components/Contact";

// Dynamic import for PostContent
const PostContent = dynamic(() => import("@/components/common/PostContent"), {
  suspense: true,
});

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

  return (
    <main>
      <Menu />
      <FullHeader
        image={creation}
        playfare={playfare.className}
        title={creation.title}
        introductionText={creation.introductionText[0].children[0].text}
      />

      <Suspense fallback={<div>Loading Post Content...</div>}>
        <PostContent postsTitle={postsTitle} creation={creation} />
      </Suspense>

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
      <Contact archivo={archivo.className} />
      <Footer />
    </main>
  );
}
