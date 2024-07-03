import React, { Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import PageHeader from "@/components/common/PageHeader";
import { playfare, archivo } from "./../font";
import Footer from "@/components/Footer";
import Menu from "@/components/common/Menu";
import Agenda from "@/components/Agenda";
import {
  AGENDA_ATELIER_QUERY,
  AGENDA_CREATION_QUERY,
  getAgendaData,
} from "../../../sanity/lib/queries";
import { loadQuery } from "../../../sanity/lib/store";
import { AgendaType } from "@/types/AgendaType";
import FullHeader from "@/components/common/PageHeader/FullHeader";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import PostCards from "@/components/common/Post/PostCards";

// Dynamic import for PostContent
const PostContent = dynamic(() => import("@/components/common/PostContent"), {
  suspense: true,
});

async function getCreationData() {
  return await client.fetch(groq`
    *[_type == "creations"] {
  
      "posts": posts[] -> {title , slug , mainImage{
              "url": asset->url,
              "alt": asset->alt,
              "metadata": asset->ref
            }}
    }
  `);
}

export default async function Creations() {
  const creations = await getCreationData();
  const creation = creations[0];
  const postsTitle = creation.posts;

  const postsData = creations.map((crea: any) => crea.posts).flat();

  console.log(postsData);

  return (
    <main>
      <Menu />
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          paddingTop: "200px",
          justifyContent: "center",
        }}
      >
        {postsData.map((crea: any) => (
          <PostCards
            title={crea.title}
            link={`creations/${crea.slug.current}`}
            image={crea.mainImage.url}
          />
        ))}
      </div>
    </main>
  );
}
