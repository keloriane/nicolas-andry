import React from "react";

import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import PageHeader from "@/components/common/PageHeader";
import { playfare } from "../font";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Slider from "@/components/Slider";
import AterlierItem from "@/components/AtelierSection";
import PageHero from "@/components/PageHero";
import FullHeader from "@/components/common/PageHeader/FullHeader";

async function getAteliersData() {
  return await client.fetch(
    groq`
    *[_type == "ateliers"][0] {
      imageHeader,
      title,
      introductionText,
      images,
      sections,
      globalSection,

    }
  `
  );
}

export default async function Ateliers() {
  const ateliers = await getAteliersData();
  const sections = ateliers.sections;

  return (
    <main>
      <Menu />

      {/* <PageHeader
        image={ateliers}
        playfare={playfare.className}
        title={ateliers.title}
        introductionText={ateliers.introductionText[0].children[0].text}
      /> */}
      <FullHeader
        image={ateliers}
        playfare={playfare.className}
        title={ateliers.title}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      <div className="slider_container" style={{ paddingTop: "100px" }}>
        <Slider images={ateliers.images} centered={true} />
      </div>

      <div className="atelier_container" style={{ position: "relative" }}>
        <AterlierItem
          mainSection={ateliers.globalSection}
          sections={ateliers.globalSection[0].sections}
        />
      </div>

      <Footer />
    </main>
  );
}
