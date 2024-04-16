"use client";
import React, { useEffect, useState } from "react";
import Slider from "@/components/Slider";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import GridContainer from "../Container";
import Col from "../Col";
import * as S from "./post-content.styles";
import { Image } from "@/types";

interface Post {
  title: string;
  categories: string[];
  content: [];
  images: { url: string; alt: string }[];
}

interface PostContentProps {
  postsTitle: { title: string; slug: { current: string } }[];
}

const PostContent: React.FC<PostContentProps> = ({ postsTitle }) => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>("ten-weingaert-2022");

  useEffect(() => {
    const getActivePost = async (slug: string) => {
      try {
        const post: Post[] = await client.fetch(
          groq`
            *[_type == "post" && slug.current == $slug]{
              title,
              categories,
              content,
              'images': images[]{
                "url": asset->url,
                "alt": asset->alt
              }
            }
          `,
          { slug }
        );
        setActivePost(post[0] || null);
      } catch (error) {
        console.error("Error fetching active post:", error);
      }
    };

    getActivePost(activeSlug);
  }, [activeSlug]);

  const onPostClick = (slug: { current: string }) => {
    setActiveSlug(slug.current);
  };

  return (
    <S.PostCotainer className="post_content">
      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={4} span={18}>
          <nav>
            <ul>
              {postsTitle.map((post, index) => (
                <li key={index} onClick={() => onPostClick(post.slug)}>
                  {post.title}
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </GridContainer>

      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={2} span={11}>
          <PortableText value={activePost?.content || []} />
        </Col>
      </GridContainer>

      <div className="slider_container">
        <Slider images={activePost?.images || []} />
      </div>
    </S.PostCotainer>
  );
};

export default PostContent;
