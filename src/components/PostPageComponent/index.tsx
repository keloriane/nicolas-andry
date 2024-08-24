"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PostHeader from "@/components/common/Post/PostHeader";
import PostImageGrid from "@/components/common/Post/PostImageGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { archivo } from "@/app/font";
import { PostDataType } from "@/types";

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
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }, []);

  return (
    <div style={{ paddingTop: "150px" }}>
      <PostHeader locale={params.locale} post={post[0]} />
      <PostImageGrid activePost={post[0]} locale={params.locale} />
      <Contact archivo={archivo.className} />
      <Footer locale={params.locale} />
    </div>
  );
};

export default PostPageComponent;
