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

async function getAteliersData() {
  return await client.fetch(
    groq`
    *[_type == "ateliers"][0] {
      imageHeader,
      title,
      introductionText,
      images,
      sections

    }
  `
  );
}

export default async function Creations() {
  const ateliers = await getAteliersData();
  const sections = ateliers.sections;

  return (
    <main>
      <Menu />
      <PageHero image={ateliers} />
      <PageHeader
        playfare={playfare.className}
        title={ateliers.title}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      <div className="slider_container" style={{ paddingTop: "50px" }}>
        <Slider images={ateliers.images} centered={true} />
      </div>

      <div className="atelier_container" style={{ position: "relative" }}>
        <AterlierItem sections={sections} />
      </div>

      <Footer />
    </main>
  );
}
