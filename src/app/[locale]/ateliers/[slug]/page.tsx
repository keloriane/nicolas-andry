import { groq, PortableText } from "next-sanity";
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import BlockSections from "@/components/BlockSections";

async function getAteliersData(slug: string) {
  const query = groq`*[_type == "ateliers_items" && slug.current == "${slug}" ][0]{
    title,
    contentBlocks[] {
    title_content,
    content_text[],
    title,
    image,
    blockContent[]
  }
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function AtelierPage(slug: { params: { slug: string } }) {
  const ateliers = await getAteliersData(slug.params.slug);
  console.log(slug.params.slug);
  console.log("Ateliers", ateliers);

  return (
    <div style={{ paddingTop: "100px" }}>
      <BlockSections ateliers={ateliers.contentBlocks} title={ateliers.title} />
    </div>
  );
}
