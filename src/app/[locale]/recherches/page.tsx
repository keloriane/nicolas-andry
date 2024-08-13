import React from "react";
import Menu from "@/components/common/Menu";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import PostContent from "@/components/common/PostContent";
import { playfare } from "../../font";
import Agenda from "@/components/Agenda";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  getAgendaData,
} from "../../../../sanity/lib/queries";
import { loadQuery } from "../../../../sanity/lib/store";
import { AgendaType } from "@/types/AgendaType";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import Postgrid from "@/components/Postgrig";

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

async function getResearchData() {
  return await client.fetch(groq`
    *[_type == "recherches"] {
      title,
      introductionText,
      imageHeader,
      "posts": posts[] -> {title, slug, mainImage{ "url": asset->url, "alt": asset->alt }}
    }
  `);
}

export default async function Creations({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const research = await getResearchData();

  return (
    <main>
      <Menu locale={locale} />
      <HeaderMask
        image={research}
        playfare={playfare.className}
        title={research[0].title}
        introductionText={research[0].introductionText[0].children[0].text}
      />
      <Postgrid creations={research[0].posts} />
    </main>
  );
}
