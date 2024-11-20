"use client";

import React, { useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { client } from "../../../sanity/lib/client";
import { theme } from "@/styles/theme";
import GridContainer from "../common/Container";
import Col from "../common/Col";

gsap.registerPlugin(ScrollTrigger);

const LayerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 19px;
    }
  }

  .link-post-grid {
    padding: 10px;
    border: 1px solid black;
    font-weight: 100;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 19px;
    }
    &:hover {
      border: 1px solid ${theme.colors.orange};
      span {
        color: ${theme.colors.orange} !important;
        transition: all 0.15s ease-in;
      }
      transition: all 0.15s ease-in;
    }
  }
`;

const PostGridContainer = styled.section`
  .grid-wrapper {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.black};
    border: 1px solid black;
    max-height: 775px;
    height: 100%;
    @media screen and (max-width: 640px) {
      max-height: 1200px;
    }
  }

  .mask-anim {
    overflow: hidden;
    background: transparent;
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 133.33%; // This creates a 3:4 aspect ratio
  }

  .maskImage {
    object-fit: cover;
  }
`;

const PostsGrid = ({
  playfare,
  archivo,
  posts,
  locale,
}: {
  playfare: string;
  archivo: string;
  locale: string;
  posts: Array<{
    image: string;
    title: string;
    description: any[];
    slug: string;
    postgridCta?: string;
  }>;
}) => {
  const builder = useMemo(() => imageUrlBuilder(client), []);
  const urlFor = useMemo(
    () => (source: string) => builder.image(source),
    [builder]
  );

  const maskContainers = useRef<HTMLDivElement[]>([]);

  return (
    <PostGridContainer id="post-navigation">
      <GridContainer
        colCount={24}
        colGap={20}
        rowGap={20}
        style={{
          padding: "0 20px",
          maxWidth: "1280px",
          margin: "0 auto 100px",
        }}
      >
        {posts.map((post, index) => (
          <Col
            className={`item-${index} mask-anim`}
            key={index}
            reactRef={(el: any) => {
              if (el) maskContainers.current[index] = el;
            }}
            column={
              index === 0
                ? [1, 1, 1, 1]
                : index === 1
                  ? [1, 1, 9, 9]
                  : [1, 1, 17, 17]
            }
            span={[24, 24, 8, 8]}
          >
            <div className="grid-wrapper">
              <div className="image-container">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="maskImage"
                />
              </div>
              <LayerCard>
                <CardWrapper className="rich-text">
                  <h3 className={playfare}>{post.title}</h3>
                  <div className={archivo}>
                    <PortableText value={post.description} />
                  </div>
                  <Link
                    className="link-post-grid"
                    href={`${locale}/${post.slug}`}
                  >
                    <span className={archivo}>{post.postgridCta}</span>
                  </Link>
                </CardWrapper>
              </LayerCard>
            </div>
          </Col>
        ))}
      </GridContainer>
    </PostGridContainer>
  );
};

export default PostsGrid;
