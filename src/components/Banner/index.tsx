"use client";
import { imageClipAnimation } from "@/mixins/animations";
import { useGSAP } from "@gsap/react";
import Image, { StaticImageData } from "next/image";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  max-width: 100%;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
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
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Memoize the animation function call
  const memoizedAnimation = useMemo(() => {
    return () => {
      if (imageWrapperRef.current && imageRef.current && containerRef.current) {
        imageClipAnimation(
          imageWrapperRef.current,
          imageRef.current,
          containerRef.current
        );
      }
    };
  }, [imageWrapperRef, imageRef, containerRef]);

  useGSAP(memoizedAnimation);

  return (
    <div ref={containerRef}>
      <BannerWrapper ref={imageWrapperRef}>
        <Image
          ref={imageRef}
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
