import React from "react";

import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

import { archivo, playfare } from "../../font";

import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import Postgrid from "@/components/Postgrig";
import Separator from "@/components/common/Separator";
import { GetAgendaCTA, GetAgendaData } from "../../../../sanity/lib/queries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AgendaCta from "@/components/common/AgendaCta";

async function getResearchData() {
  return await client.fetch(groq`
    *[_type == "recherches"] {
      title,
      introductionText,
      imageHeaderLeft{ "url": asset->url, "alt": asset->alt }, 
      imageHeaderRight{ "url": asset->url, "alt": asset->alt },
      "posts": posts[] -> {title, slug, mainImage{ "url": asset->url, "alt": asset->alt } }
    }
  `);
}

export default async function Creations({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const research = await getResearchData();
  const cta = await GetAgendaCTA(locale);

  return (
    <main>
      <HeaderMask
        imageLeft={research[0].imageHeaderLeft.url}
        imageRight={research[0].imageHeaderRight.url}
        playfare={playfare.className}
        title={research[0].title}
        introductionText={research[0].introductionText}
      />
      <Postgrid locale={locale} creations={research[0].posts} />
      <Separator />
    </main>
  );
}
