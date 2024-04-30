"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PageHeaderType } from "@/types";
import * as S from "./page-header.styles";
import ResponsiveText from "../ResponsiveText";
import { playfare } from "@/app/font";
import AnimatedText from "../AnimatedText";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

const imageHeight = 480;
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
      rgba(255, 255, 255, 1) 2%,
      rgba(255, 255, 255, 0) 68%
    );
    z-index: 2;
  }
`;

const PageHeader: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  return (
    <div>
      <div className="hero_post">
        <HeroContainer>
          <div className="layer"></div>
          <Image
            src={urlFor(image.imageHeader).url()}
            alt="atelier coulisse"
            sizes={"100vw"}
            fill
            style={{
              objectFit: "cover",

              objectPosition: "100% 0%",
            }}
          />
        </HeroContainer>
      </div>
      <S.PageHeaderContainer>
        <GridContainer colCount={24} colGap={20} className="header-wrapper">
          <Col column={[2, 2, 2, 2, 7]} span={[22, 22, 22, 22, 12]}>
            <ResponsiveText
              as="h1"
              sizes={["30px", "30px", "60px", "104px"]}
              className={playfare}
            >
              <AnimatedText text={title} duration={0.5} splitBy="word" />
            </ResponsiveText>
            <ResponsiveText as="p" sizes={["14px", "18px", "18px", "18px"]}>
              <AnimatedText
                text={introductionText}
                duration={0.5}
                splitBy="phrase"
              />
            </ResponsiveText>
          </Col>
        </GridContainer>
      </S.PageHeaderContainer>
    </div>
  );
};
export default PageHeader;
