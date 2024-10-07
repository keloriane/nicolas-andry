import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";
import {
  GetAgendaCTA,
  getCreationData,
} from "../../../../../sanity/lib/queries";
import { Metadata } from "next";
import PostPageComponent from "@/components/PostPageComponent";

async function fetchPageData(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug]{
    title,
    categories,
    content,
    remerciements,
    mainImage,
    'images': images[]{
      "url": asset->url,
      "alt": asset->alt,
      "metadata": asset->ref
    }
  }`;
  const data = await client.fetch(query, { slug });
  return data;
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
  const cta = await GetAgendaCTA();



  return <PostPageComponent params={params} post={post} />;
}
