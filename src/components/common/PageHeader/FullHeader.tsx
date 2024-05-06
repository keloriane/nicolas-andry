"use client";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { PageHeaderType } from "@/types";
import { urlFor } from "@/lib/imageBuilder";
import { theme } from "@/styles/theme";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FullHeaderContainer = styled.div`
  position: relative;
  width: 95%;
  height: 83vh;
  margin: auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #0000009e;
  /* background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 2%,
    rgba(255, 255, 255, 0) 68%
  ); */
  z-index: 2;
`;

const ImageItem = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -125%);
  text-align: center;

  z-index: 10;
`;

const Title = styled.h1`
  font-size: 10rem;
  color: ${theme.colors.orange};
  opacity: 0;
`;

const Introduction = styled.p`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0;
`;

const FullHeader: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      [titleRef.current, paragraphRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.out", stagger: 0.1 }
    );

    ScrollTrigger.create({
      trigger: layerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        console.log(self.progress);
        gsap.to(layerRef.current, {
          opacity: self.progress * 0.5,
          ease: "none",
        });
      },
    });
  }, []);

  return (
    <header style={{ paddingTop: "150px" }}>
      <FullHeaderContainer>
        <Layer ref={layerRef} />
        <ImageItem
          fill
          src={urlFor(image.imageHeader).url()}
          alt="Header Image"
        />
      </FullHeaderContainer>
      <ContentContainer>
        <Title className={playfare} ref={titleRef}>
          {title}
        </Title>
        <Introduction ref={paragraphRef}>{introductionText}</Introduction>
      </ContentContainer>
    </header>
  );
};

export default FullHeader;
