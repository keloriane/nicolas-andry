import React from "react";

import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import PageHeader from "@/components/common/PageHeader";
import { playfare } from "../font";
import { client } from "../../../sanity/lib/client";
import { PortableText, groq } from "next-sanity";
import { urlFor } from "@/lib/imageBuilder";
import Slider from "@/components/Slider";
import Image from "next/image";
import styled from "styled-components";
import { Section } from "@/types";
import AterlierItem from "@/components/AtelierSection";

function getAteliersData() {
  return client.fetch(
    groq`
    *[_type == "ateliers"][0]
  `
  );
}
function getAteliersNavData() {
  return client.fetch(
    groq`
        *[_type == "ateliers"][0] {
      sections[] {
        title,
        slug
      }
    }
  `
  );
}

export default async function Creations() {
  const ateliers = await getAteliersData();
  const ateliersNav = await getAteliersNavData();
  const sections = ateliers.sections;

  return (
    <main>
      <Menu />
      <PageHeader
        playfare={playfare.className}
        title={ateliers.title}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      <div className="slider_container">
        <Slider images={ateliers.images} centered={true} />
      </div>

      <AterlierItem sections={sections} />

      <Footer />
    </main>
  );
}
