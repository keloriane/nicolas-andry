"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PortableText } from "next-sanity";
import { PostContainer } from "./post-grid.styles";

import Image from "next/image";

import ResponsiveText from "../ResponsiveText";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PostHeader = ({
  post,
  locale,
  mainImage,
  titleContent,
}: {
  post: any;
  locale: string;
  mainImage: string;
  titleContent?: string;
}) => {
  const pathname = usePathname();

  const exactPath = pathname.split("/")[2];
  return (
    <PostContainer className="dark_bg">
      <div className="hero">
        <div className="hero_layer"></div>
        <Image className="image_hero_layer" src={mainImage} alt="" fill />
        <div className="text_container">
          {/* <ResponsiveText
            as={"h1"}
            sizes={["36px", "48px", "110px"]}
            className="creation_title"
          >
            {titleContent ? titleContent : ""}
          </ResponsiveText> */}
        </div>
      </div>
      <GridContainer colCount={24} colGap={20} className="grid-section-header">
        <Col
          column={[2, 2, 2, 4]}
          span={[22, 22, 22, 18]}
          className="text_header_wrapper"
        >
          <div className="breadcrumb">
            <Link href={`/${locale}/${exactPath}`}>
              {exactPath.toUpperCase()}
            </Link>
            /
            <Link className="active_item" href={`/${locale}/${exactPath}`}>
              {titleContent?.toUpperCase()}
            </Link>
          </div>

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
