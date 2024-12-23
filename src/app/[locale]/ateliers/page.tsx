import React from "react";

import { playfare } from "../../font";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import Slider from "@/components/Slider";

import FullHeader from "@/components/common/PageHeader/FullHeader";
import AtelierNavigation from "@/components/AtelierNavigation";
import Separator from "@/components/common/Separator";

async function getAteliersData() {
  return await client.fetch(
    groq`
    *[_type == "ateliers"][0] {
      mainTitle,
      imageHeader,
      introductionText,
      images,
      "atelierItems": atelierItems[] -> {title , slug , image , introductionText }
    }
  `
  );
}

export default async function Ateliers({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const ateliers = await getAteliersData();
  return (
    <main>
      <FullHeader
        playfare={playfare.className}
        title={ateliers.mainTitle}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      <div className="slider_container" style={{ paddingTop: "100px" }}>
        <Slider images={ateliers.images} centered={true} />
      </div>

      <div className="atelier_container" style={{ position: "relative" }}>
        <AtelierNavigation
          atelierItems={ateliers.atelierItems}
          locale={locale}
        />

        <Separator />
      </div>
    </main>
  );
}
