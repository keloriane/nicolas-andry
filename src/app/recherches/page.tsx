import React from "react";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import PostContent from "@/components/common/PostContent";
import PageHeader from "@/components/common/PageHeader";
import { playfare } from "../font";
import Agenda from "@/components/Agenda";
import HeaderTree from "@/components/common/PageHeader/HeaderTree";

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

export default async function Creations() {
  const researchData = await getRechercheData();
  const postsTitle = researchData.posts;

  return (
    <main>
      <Menu />

      {/* <PageHeader
        image={researchData}
        playfare={playfare.className}
        title={researchData.title}
        introductionText={researchData.introductionText[0].children[0].text}
      /> */}
      <HeaderTree
        image={researchData}
        playfare={playfare.className}
        title={researchData.title}
        introductionText={researchData.introductionText[0].children[0].text}
      />
      <PostContent creation={researchData} postsTitle={postsTitle} />
      <Agenda playfare={playfare.className} />
      <Footer />
    </main>
  );
}
