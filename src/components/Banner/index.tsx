"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  max-width: 100%;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
  img {
    width: 90%;
  }
`;
const Banner = ({
  src,
  width,
  height,
}: {
  src: string | StaticImageData;
  width: number;
  height: number;
}) => {
  return (
    <BannerWrapper>
      <Image src={src} alt="banner image" height={height} width={width} />
    </BannerWrapper>
  );
};
export default Banner;
