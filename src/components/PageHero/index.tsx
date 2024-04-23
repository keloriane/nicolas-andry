"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

const imageHeight = 800;
const HeroContainer = styled.header`
  width: 100vw;
  height: ${imageHeight}px;
  position: relative;
  .layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 68%
    );
    z-index: 2;
  }
`;

const PageHero = ({ image }: { image: { imageHeader: [] } }) => {
  return (
    <HeroContainer>
      <div className="layer"></div>
      <Image
        src={urlFor(image.imageHeader).url()}
        alt="atelier coulisse"
        width={1000}
        height={imageHeight}
        style={{
          objectFit: "cover",
          width: "100vw",
          objectPosition: "100% 0%",
          paddingTop: "100px",
        }}
      />
    </HeroContainer>
  );
};

export default PageHero;
