import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { getCreationData } from "../../../../../sanity/lib/queries";
import { Metadata } from "next";

import PostHeader from "@/components/common/Post/PostHeader";
import { urlForImage } from "../../../../../sanity/lib/image";
import PostImageGrid from "@/components/common/Post/PostImageGrid";

async function fetchPageData(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug]{
    title,
    categories,
    content,
    remerciements,
    mainImage,
    titleContent,
    date,
    subtitleContent,
    'images': images[]{
      "url": asset->url,
      "alt": asset->alt,
      "metadata": asset->ref
    }
  }`;
  const data = await client.fetch(query, { slug });
  return data;
}

async function getOtherCta() {
  return await client.fetch(groq`
    *[_type == "creations"] {
      otherTitle
      }
    `);
}

export async function generateStaticParams() {
  const response = await getCreationData();

  return response.map((post) =>
    post.posts.map((item: { slug: { current: string } }) => {
      item.slug.current;
    })
  );
}

export const metadata: Metadata = {
  title: "Créations",
  description: "Photography",
};

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const post = await fetchPageData(params.slug);
  const otherTitle = await getOtherCta();
  return (
    <>
      <PostHeader
        mainImage={urlForImage(post[0].mainImage)}
        locale={params.locale}
        post={post[0]}
        titleContent={post[0].title}
        date={post[0].date}
        subtitleContent={post[0].subtitleContent}
      />
      <PostImageGrid
        activePost={post[0]}
        locale={params.locale}
        otherTitle={otherTitle}
      />
    </>
  );
}
