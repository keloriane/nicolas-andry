import React from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import Menu from "@/components/common/Menu";
import PostCards from "@/components/common/Post/PostCards";
import { playfare } from "./../font";
import HeaderTree from "@/components/common/PageHeader/HeaderTree";
import styled from "styled-components";
import Postgrid from "@/components/Postgrig";
import HeaderMask from "@/components/common/PageHeader/HeaderMask";

// Dynamic import for PostContent
const PostContent = dynamic(() => import("@/components/common/PostContent"), {
  suspense: true,
});

type Creation = {
  title: string;
  introductionText: { children: { text: string }[] }[];
  imageHeader: any;
  posts: {
    title: string;
    slug: { current: string };
    mainImage: { url: string; alt: string };
  }[];
};

async function getCreationData() {
  return await client.fetch<Creation[]>(groq`
    *[_type == "creations"] {
      title,
      introductionText,
      imageHeader,
      "posts": posts[] -> {title, slug, mainImage{ "url": asset->url, "alt": asset->alt }}
    }
  `);
}

export default async function Creations() {
  const creations = await getCreationData();
  const creation = creations[0];

  if (!creation) return <div>No creation data found</div>;

  console.log(creations[0].posts);

  return (
    <main>
      <Menu />
      <HeaderMask
        image={creation}
        playfare={playfare.className}
        title={creation.title}
        // introductionText={creation.introductionText[0].children[0].text}
        introductionText={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
      />
      <Postgrid creations={creations[0].posts} />
    </main>
  );
}
