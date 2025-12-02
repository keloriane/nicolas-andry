import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";

import { PostDataType, PostType } from "@/types";
import PostHeader from "@/components/common/Post/PostHeader";
import PostImageGrid from "@/components/common/Post/PostImageGrid";
import { urlForImage } from "../../../../../sanity/lib/image";

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
  const data = await client.fetch(query, { slug }, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
  return data;
}

async function getOtherCta() {
  return await client.fetch(groq`
    *[_type == "recherches"][0] {
      otherTitle
    }
  `, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const post: PostDataType[] = await fetchPageData(params.slug);

  const otherTitle = await getOtherCta();

  console.log("POST", post.length);

  return (
    <div>
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
    </div>
  );
}
