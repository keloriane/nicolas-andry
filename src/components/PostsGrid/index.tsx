"use client";
import React from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import styled from "styled-components";
import CreationImage from "@/../public/monsnochrome-04.jpg";
import RechercheImage from "@/../public/recherches-cycle1-11.jpg";
import AtelierImagae from "@/../public/coulisses-ateliers-06.jpg";
import ImageParallax from "../common/ImageParallax";
import Button from "../common/Button";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

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

  posts: [{ image: string; title: string; description: [] }];
}) => {
  const builder = imageUrlBuilder(client);
  function urlFor(source: string) {
    return builder.image(source);
  }

  return (
    <PostGridContainer>
      <GridContainer
        colCount={24}
        colGap={20}
        rowGap={20}
        style={{ padding: "0 20px", maxWidth: "1380px", margin: "100px auto" }}
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
            {/* <ImageParallax
                $paddingTop={[125, 125, 300, 155]}
                $height="170%"
                $backgroundImage={urlFor(post.image).url()}
                stiffness={1.5}
              /> */}
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              fill
              objectFit="cover"
            />
            <LayerCard>
              <CardWrapper>
                <h3 className={playfare}>{post.title}</h3>
                <PortableText value={post.description} />
              </CardWrapper>
            </LayerCard>
          </Col>
        ))}
      </GridContainer>
    </PostGridContainer>
  );
};
export default PostsGrid;
