"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import { PostContainer } from "./post-grid.styles";

const PostHeader = (post: any) => {
  return (
    <PostContainer>
      <GridContainer colCount={24} colGap={20}>
        <Col
          column={[2, 2, 2, 2]}
          span={[22, 22, 11, 11]}
          className="text_header_wrapper"
        >
          <div className="rich-text">
            <PortableText value={post?.content || []} />
          </div>
        </Col>
        <Col
          column={[2, 2, 13, 13]}
          span={[22, 22, 10, 10]}
          className="image_header_wrapper"
        >
          {post ? (
            <Image
              src={urlFor(post.mainImage).url() as string}
              fill
              style={{ objectFit: "cover" }}
              alt={post.title as string}
              priority
              sizes="100%"
            />
          ) : (
            <p>Loading main image...</p>
          )}
        </Col>
      </GridContainer>
    </PostContainer>
  );
};

export default PostHeader;
