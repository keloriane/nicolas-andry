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
import { playfare } from "@/app/font";

const PostHeader = ({
  post,
  locale,
  mainImage,
  titleContent,
  subtitleContent,
  date,
}: {
  post: any;
  locale: string;
  mainImage: string;
  titleContent?: string;
  subtitleContent?: string;
  date?: string;
}) => {
  const pathname = usePathname();

  console.log(date);

  const exactPath = pathname.split("/")[2];
  return (
    <PostContainer className="dark_bg">
      <div className="hero">
        <div className="hero_layer"></div>
        <div className="image_hero_wrapper">
          <Image className="image_hero_layer" src={mainImage} alt="" fill />
        </div>
        <div className="text_container"></div>
      </div>

      <div
        className="info_container"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
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

        <div className="title_container">
          <h1 className={playfare.className}>{titleContent}</h1>
          <h2>{subtitleContent ? subtitleContent : ""}</h2>
          <h3>{date}</h3>
        </div>

        <div className="rich-text">
          <div className="inner_text">
            <PortableText value={post?.content || []} />
          </div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostHeader;
