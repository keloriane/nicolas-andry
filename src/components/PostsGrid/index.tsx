"use client";
import React, { useMemo } from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";

const LayerCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 1px;
  background: rgb(42, 24, 18);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  background: linear-gradient(
    0deg,
    rgba(42, 24, 18, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
  z-index: 2;
  color: white;
  text-align: center;
  h3 {
    font-size: 30px;
  }
`;

const CardWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 19px;
  }

  .link-post-grid {
    padding: 10px;
    border: 1px solid white;
    font-weight: 100;
    &:hover {
      border: 1px solid ${theme.colors.orange};
      color: ${theme.colors.orange};
      transition: all 0.15s ease-in;
    }
  }
`;

const PostGridContainer = styled.div`
  .image-grid-item {
    width: 100%;
    height: 600px;
  }
`;

const PostsGrid = ({
  playfare,
  archivo,
  posts,
}: {
  playfare: string;
  archivo: string;

  posts: [{ image: string; title: string; description: []; slug: string }];
}) => {
  const builder = useMemo(() => imageUrlBuilder(client), []);
  const urlFor = useMemo(
    () => (source: string) => builder.image(source),
    [builder]
  );

  return (
    <PostGridContainer>
      <GridContainer
        colCount={24}
        colGap={20}
        rowGap={20}
        style={{ padding: "0 20px", maxWidth: "1280px", margin: "100px auto" }}
      >
        {posts.map((post, index) => (
          <Col
            className="image-grid-item"
            key={index}
            column={
              index === 0
                ? [1, 1, 1, 1]
                : index === 1
                  ? [1, 1, 9, 9]
                  : [1, 1, 17, 17]
            }
            span={[24, 24, 8, 8]}
          >
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
              fill
              priority={index < 3} // Only prioritize the first few images
              loading={index < 3 ? "eager" : "lazy"} // Lazy load all images except the first few
            />
            <LayerCard>
              <CardWrapper className="rich-text">
                <h3 className={playfare}>{post.title}</h3>
                <div className={archivo}>
                  <PortableText value={post.description} />
                </div>
                <Link className={"link-post-grid"} href={`/${post.slug}`}>
                  <span style={{ color: "white" }} className={archivo}>
                    Découvrir
                  </span>
                </Link>
              </CardWrapper>
            </LayerCard>
          </Col>
        ))}
      </GridContainer>
    </PostGridContainer>
  );
};

export default PostsGrid;
