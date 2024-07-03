import React from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import Menu from "@/components/common/Menu";
import PostCards from "@/components/common/Post/PostCards";
import { playfare } from "./../font";

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

  return (
    <main>
      <Menu />
      <FullHeader
        image={creation}
        playfare={playfare.className}
        title={creation.title}
        introductionText={creation.introductionText[0].children[0].text}
      />
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          paddingTop: "200px",
          justifyContent: "center",
        }}
      >
        {creation.posts.map((post) => (
          <PostCards
            key={post.slug.current}
            title={post.title}
            link={`creations/${post.slug.current}`}
            image={post.mainImage.url}
          />
        ))}
      </div>
    </main>
  );
}
