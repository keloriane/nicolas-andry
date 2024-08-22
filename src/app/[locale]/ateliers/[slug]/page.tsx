import { groq, PortableText } from "next-sanity";
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import BlockSections from "@/components/BlockSections";
import Footer from "@/components/Footer";

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

export default async function AtelierPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const ateliers = await getAteliersData(params.slug);

  return (
    <div style={{ paddingTop: "100px" }}>
      <BlockSections ateliers={ateliers.contentBlocks} title={ateliers.title} />
      <Footer locale={params.locale} />
    </div>
  );
}
