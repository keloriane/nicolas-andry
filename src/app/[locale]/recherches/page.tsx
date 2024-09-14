import React from "react";
import Menu from "@/components/common/Menu";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import PostContent from "@/components/common/PostContent";
import { archivo, playfare } from "../../font";
import Agenda from "@/components/Agenda";

import { loadQuery } from "../../../../sanity/lib/store";
import { AgendaType } from "@/types/AgendaType";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import Postgrid from "@/components/Postgrig";
import Separator from "@/components/common/Separator";
import { GetAgendaData } from "../../../../sanity/lib/queries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AgendaCta from "@/components/common/AgendaCta";

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

  console.log(research);

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
      <AgendaCta locale={locale} />

      <Contact archivo={archivo.className} />

      <Footer locale={locale} />
    </main>
  );
}
