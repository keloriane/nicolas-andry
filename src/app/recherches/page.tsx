import React from "react";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import { loadQuery } from "@sanity/react-loader";
import { RECHERCHES_QUERY } from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import PostContent from "@/components/common/PostContent";
import PageHeader from "@/components/common/PageHeader";
import { playfare } from "../font";
import PageHero from "@/components/PageHero";

async function getRechercheData() {
  return await client.fetch(
    groq`
      *[_type == "recherches"] {
        title,
        introductionText,
        imageHeader,
        "activePost": *[_type == "posts" && references(^._id)]{
          title,
          content,
          'images': images[]{
            "url": asset->url,
            "alt": asset->alt
          }
        }[0], // Assuming only one active post per creation
        "posts": posts[]->{title, slug}
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
      <PageHero image={researchData} />
      <PageHeader
        playfare={playfare.className}
        title={researchData.title}
        introductionText={researchData.introductionText[0].children[0].text}
      />
      <PostContent postsTitle={postsTitle} />
      <Footer />
    </main>
  );
}
