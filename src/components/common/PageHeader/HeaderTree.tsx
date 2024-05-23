"use client";
import { useLayoutEffect, useRef } from "react";
import { urlFor } from "@/lib/imageBuilder";
import { theme } from "@/styles/theme";
import { PageHeaderType } from "@/types";
import Image from "next/image";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
  gap: 50px;
`;

const HeaderText = styled.div`
  margin-right: 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 10px;
  color: ${theme.colors.orange};
  @media (max-width: 488px) {
    font-size: 3rem;
  }
`;

const HeaderIntroduction = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${theme.colors.black};
`;

const HeaderImage = styled(Image)`
  object-fit: cover;
  width: 1280px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeaderImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 400px;
  max-width: 1280px;
  img {
    margin-top: -30%;
  }
`;

gsap.registerPlugin(ScrollTrigger);
const HeaderTree: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(imageRef.current, {
          yPercent: 20 * self.progress,
          ease: "none",
        });
      },
    });
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderText>
          <HeaderTitle ref={titleRef} className={playfare}>
            {title}
          </HeaderTitle>
          <HeaderIntroduction ref={textRef}>
            {introductionText}
          </HeaderIntroduction>
        </HeaderText>
        <HeaderImageContainer>
          <HeaderImage
            ref={imageRef}
            width={800}
            height={900}
            style={{ top: 0 }}
            src={urlFor(image.imageHeader).url()}
            alt={title}
          />
        </HeaderImageContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default HeaderTree;
