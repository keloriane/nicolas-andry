"use client";

import Image, { StaticImageData } from "next/image";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  max-width: 100%;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding-bottom: 100px;
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
    <div>
      <BannerWrapper>
        <Image
          src={src}
          alt="banner image"
          height={height}
          width={width}
          style={{ objectFit: "cover", width: "90%", height: "auto" }}
        />
      </BannerWrapper>
    </div>
  );
};

export default Banner;
