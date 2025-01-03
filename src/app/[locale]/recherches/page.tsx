import React from "react";

import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

import { playfare } from "../../font";

import HeaderMask from "@/components/common/PageHeader/HeaderMask";

import Separator from "@/components/common/Separator";
import { getAgendaCTA } from "../../../../sanity/lib/queries";

import PostGridItem from "@/components/Postgrig/PostGridItem";
import Postgrid from "@/components/Postgrig";

async function getResearchData() {
  return await client.fetch(groq`
    *[_type == "recherches"] {
      title,
      introductionText,
      gridCTA,
      otherTitle,
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
  const cta = await getAgendaCTA(locale);

  return (
    <main>
      <HeaderMask
        imageLeft={research[0].imageHeaderLeft.url}
        imageRight={research[0].imageHeaderRight.url}
        playfare={playfare.className}
        title={research[0].title}
        introductionText={research[0].introductionText}
      />
      {/* <PostGridItem
        locale={locale}
        creations={research[0].posts}
        cta={research[0].gridCTA}
      /> */}

      <Postgrid locale={locale} creations={research[0].posts} />
      <Separator />
    </main>
  );
}
