"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PortableText } from "next-sanity";
import { PostContainer } from "./post-grid.styles";
import ArrowLeft from "../ArrowLeft";
import Link from "next/link";

const PostHeader = ({ post, locale }: { post: any; locale: string }) => {
  return (
    <PostContainer>
      <GridContainer colCount={24} colGap={20}>
        <Col
          column={[2, 7, 2, 2]}
          span={[22, 22, 22, 22]}
          className="text_header_wrapper"
        >
          <div className="rich-text">
            <Link href={`/${locale}/creations`} className="arrow_link">
              <ArrowLeft />
            </Link>
            <div className="inner_text">
              <PortableText value={post?.content || []} />
            </div>
          </div>
        </Col>
        {/* <Col
          column={[2, 2, 13, 13]}
          span={[22, 22, 10, 10]}
          className="image_header_wrapper"
        >
          {post ? (
            <Image
              src={urlFor(post.mainImage).url() as string}
              fill
              style={{ objectFit: "contain" }}
              alt={post.title as string}
              priority
              sizes="100%"
            />
          ) : (
            <p>Loading main image...</p>
          )}
        </Col> */}
      </GridContainer>
    </PostContainer>
  );
};

export default PostHeader;
