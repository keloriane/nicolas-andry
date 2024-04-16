import React from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Slider from "@/components/Slider";
import PageHeader from "@/components/common/PageHeader";
import { playfare, archivo } from "./../font";
import { PortableText } from "@portabletext/react";
import PostContent from "@/components/common/PostContent";

function getCreationData() {
  return client.fetch(
    groq`
    *[_type == "creations"] {
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
  const creations = await getCreationData();
  const creation = creations[0];
  const postsTitle = creation.posts;

  return (
    <main>
      <PageHeader
        playfare={playfare.className}
        title={creation.title}
        introductionText={creation.introductionText[0].children[0].text}
      />
      <PostContent postsTitle={postsTitle} />
    </main>
  );
}
