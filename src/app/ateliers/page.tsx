import React from "react";

import Menu from "@/components/common/Menu";
import { playfare } from "../font";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Slider from "@/components/Slider";
import AterlierItem from "@/components/AtelierSection";

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
      "atelierItems": atelierItems[] -> {title , slug , image }
    }
  `
  );
}

export default async function Ateliers() {
  const ateliers = await getAteliersData();
  console.log("Ateliers", ateliers.atelierItems);

  return (
    <main>
      <Menu />

      <FullHeader
        image={ateliers}
        playfare={playfare.className}
        title={ateliers.mainTitle}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      {/* <div className="slider_container" style={{ paddingTop: "100px" }}>
        <Slider images={ateliers.images} centered={true} />
      </div> */}
      <Separator />

      <div className="atelier_container" style={{ position: "relative" }}>
        {/* <AterlierItem
          mainSection={ateliers.globalSection}
          sections={ateliers.globalSection[0].sections}
        /> */}
        <AtelierNavigation atelierItems={ateliers.atelierItems} />

        <Separator />
      </div>
    </main>
  );
}
