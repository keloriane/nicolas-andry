import React from "react";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

import { archivo, playfare } from "../../font";

import Postgrid from "@/components/Postgrig";
import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import { GetAgendaData } from "../../../../sanity/lib/queries";
import Separator from "@/components/common/Separator";
import Agenda from "@/components/Agenda";
import Contact from "@/components/Contact";

type Creation = {
  title: string;
  introductionText: { children: { text: string }[] }[];
  imageHeader: any;
  posts: {
    title: string;
    slug: { current: string };
    mainImage: { url: string; alt: string };
  }[];
};

async function getCreationData() {
  return await client.fetch<Creation[]>(groq`
    *[_type == "creations"] {
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
  const creations = await getCreationData();
  const creation = creations[0];

  const agendaData = await GetAgendaData(locale);

  const agendaCreation = agendaData[1];
  const agendaAtelier = agendaData[2];

  console.log(agendaData);

  if (!creation) return <div>No creation data found</div>;

  return (
    <main>
      <HeaderMask
        image={creation}
        playfare={playfare.className}
        title={creation.title}
        // introductionText={creation.introductionText[0].children[0].text}
        introductionText={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
      />
      <Postgrid locale={locale} creations={creations[0].posts} />
      <Separator />
      <Agenda
        introductionText={agendaData[0].introductionText}
        title={agendaData[0].title}
        agendaCreation={agendaCreation}
        agendaAtelier={agendaAtelier}
        playfare={playfare.className}
        homePage
      />
      <Separator />

      <Contact archivo={archivo.className} />
    </main>
  );
}
