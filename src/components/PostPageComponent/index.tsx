"use client";
import React from "react";

import PostHeader from "@/components/common/Post/PostHeader";

import { PostDataType } from "@/types";
import Separator from "../common/Separator";

import { urlForImage } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

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

const PostPageComponent = async ({
  params,
  post,
}: {
  params: { slug: string; locale: string };
  post: PostDataType[];
}) => {
  return (
    <div>
      <PostHeader
        mainImage={urlForImage(post[0].mainImage)}
        locale={params.locale}
        post={post[0]}
        titleContent={post[0].title}
        subtitleContent={post[0].subtitleContent}
        date={post[0].date}
      />
      {/* <PostImageGrid
        otherTitle={otherTitle}
        activePost={post[0]}
        locale={params.locale}
      /> */}
      <Separator />
    </div>
  );
};

export default PostPageComponent;
