"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PortableText } from "next-sanity";
import { PostContainer } from "./post-grid.styles";
import ArrowLeft from "../ArrowLeft";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PostContent from "../PostContent";
import ResponsiveText from "../ResponsiveText";

const PostHeader = ({
  post,
  locale,
  mainImage,
}: {
  post: any;
  locale: string;
  mainImage: string;
}) => {
  const pathname = usePathname();

  const path = pathname.split("/");

  console.log(post.content);
  return (
    <PostContainer className="dark_bg">
      <div className="hero">
        <div className="hero_layer"></div>
        <Image src={mainImage} alt="" fill />
        <div className="text_container">
          <ResponsiveText
            as={"h1"}
            sizes={["36px", "48px", "110px"]}
            className="creation_title"
          >
            {post.content[0].children[0].text
              ? post.content[0].children[0].text
              : ""}
          </ResponsiveText>

          <ResponsiveText
            as={"h2"}
            sizes={["36px", "48px", "56px"]}
            className="creation_subtitle"
          >
            {post.content[1].children[0].text
              ? post.content[1].children[0].text
              : ""}
          </ResponsiveText>
        </div>
      </div>
      <GridContainer colCount={24} colGap={20} className="grid-section-header">
        <Col
          column={[2, 2, 5, 5]}
          span={[22, 22, 13, 13]}
          className="text_header_wrapper"
        >
          <Link
            href={
              path[2] === "creations"
                ? `/${locale}/creations`
                : `/${locale}/recherches`
            }
            className="arrow_link"
          >
            <ArrowLeft />
          </Link>
          <div className="rich-text">
            <div className="inner_text">
              <PortableText value={post?.content || []} />
            </div>
          </div>
        </Col>
      </GridContainer>
    </PostContainer>
  );
};

export default PostHeader;
