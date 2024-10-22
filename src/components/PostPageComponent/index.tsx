"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PostHeader from "@/components/common/Post/PostHeader";
import PostImageGrid from "@/components/common/Post/PostImageGrid";
import { PostDataType } from "@/types";
import Separator from "../common/Separator";
import { urlFor } from "@/lib/imageBuilder";
import { urlForImage } from "../../../sanity/lib/image";

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const PostPageComponent = ({
  params,
  post,
}: {
  params: { slug: string; locale: string };
  post: PostDataType[];
}) => {
  useEffect(() => {
    // Trigger the scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  console.log(post);
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
      <PostImageGrid activePost={post[0]} locale={params.locale} />
      <Separator />
    </div>
  );
};

export default PostPageComponent;
