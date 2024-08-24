import React, { useEffect, useState } from "react";
import { client } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";

import { PostDataType, PostType } from "@/types";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import PostHeader from "@/components/common/Post/PostHeader";
import PostsGrid from "@/components/PostsGrid";
import PostImageGrid from "@/components/common/Post/PostImageGrid";
import Contact from "@/components/Contact";
import { archivo } from "@/app/font";
import Footer from "@/components/Footer";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Créations",
  description: "Photography",
};

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const post: PostDataType[] = await fetchPageData(params.slug);

  return (
    <div style={{ paddingTop: "150px" }}>
      <PostHeader locale={params.locale} post={post[0]} />
      <PostImageGrid activePost={post[0]} locale={params.locale} />

      <Contact archivo={archivo.className} />
      <Footer locale={params.locale} />
    </div>
  );
}
