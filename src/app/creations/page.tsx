import React from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import PageHeader from "@/components/common/PageHeader";
import { playfare, archivo } from "./../font";

import PostContent from "@/components/common/PostContent";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import PageHero from "@/components/PageHero";

async function getCreationData() {
  return await client.fetch(
    groq`
      *[_type == "creations"] {
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
  const creations = await getCreationData();
  const creation = creations[0];
  const postsTitle = creation.posts;

  return (
    <main>
      <Menu />
      <PageHero image={creation} />
      <PageHeader
        playfare={playfare.className}
        title={creation.title}
        introductionText={creation.introductionText[0].children[0].text}
      />

      <PostContent postsTitle={postsTitle} />
      <Footer />
    </main>
  );
}
