"use client";
import React from "react";
import PostCards from "../common/Post/PostCards";
import { PostExcerpt, PostsExcerpt } from "@/types/postExcerpt";
import styled from "styled-components";

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1280px;
  margin: 130px auto;
`;

const Postgrid = ({ creations }: PostsExcerpt) => {
  return (
    <PostGrid>
      {creations.map((post: PostExcerpt) => (
        <PostCards
          key={post.slug.current}
          title={post.title}
          link={`creations/${post.slug.current}`}
          image={post.mainImage.url}
        />
      ))}
    </PostGrid>
  );
};

export default Postgrid;
