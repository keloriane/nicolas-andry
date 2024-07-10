"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { PageHeaderType } from "@/types";
import { urlFor } from "@/lib/imageBuilder";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import GridContainer from "../Container";
import Col from "../Col";
import { theme } from "@/styles/theme";
import AnimatedText from "../AnimatedText";
import splitType from "split-type";
import * as S from "./page-header.styles";

const HeaderTree: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  const animationContext = useRef<HTMLDivElement | null>(null);
  const maskContainers = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    (context) => {
      const titleWrapper = new splitType("h2.title-creations", {
        types: "chars",
      });
      const textWrapper = new splitType("p.inner-text", { types: "lines" });
      const chars = titleWrapper.chars;
      const lines = textWrapper.lines;

      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        lines,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.4,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      const tl = gsap.timeline();

      gsap.set(".maskImage", { scale: 1.4 });
      tl.to(
        maskContainers.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 2,
          stagger: 0.35,
          ease: "expo.out",
        },
        0
      ).to(
        ".maskImage",
        {
          scale: 1,
          duration: 1.8,
          stagger: 0.35,
          ease: "expo.out",
        },
        0
      );
    },
    { scope: animationContext }
  );

  return (
    <GridContainer colCount={24} style={{ paddingTop: "150px" }}>
      <Col
        column={[3, 3, 3, 3, 3]}
        span={[21, 21, 21, 10, 10]}
        className="col-image-mask"
      >
        <S.ImageMaskContainer>
          <div className="ad" ref={animationContext}>
            <div
              className="mask"
              ref={(el) => {
                if (el) maskContainers.current[0] = el;
              }}
            >
              <Image
                src={
                  "https://cdn.sanity.io/images/blzajq7n/production/55be9c19c7da958305ca80e1d81f7aca746b54a3-665x1000.jpg"
                }
                alt="image test mask"
                width={250}
                height={375}
                sizes="(max-width: 1000px) 150px, 250px"
                className="maskImage msk-img"
              />
            </div>
            <div
              className="mask"
              ref={(el) => {
                if (el) maskContainers.current[1] = el;
              }}
            >
              <Image
                src={
                  "https://cdn.sanity.io/images/blzajq7n/production/26783c48f756eea669fd29d715e9e54a21abf1ea-572x1000.jpg"
                }
                alt="image test mask"
                width={350}
                height={550}
                sizes="(max-width: 1000px) 250px, 350px"
                loading="lazy"
                className="maskImage msk-img-2"
                blurDataURL={image + "?w=10&q=10"}
              />
            </div>
          </div>
        </S.ImageMaskContainer>
      </Col>
      <S.TextWrapper
        column={[3, 3, 3, 14, 14]}
        span={[21, 21, 21, 9, 9]}
        className="text-wrapper"
      >
        <div className={"title-container"}>
          <div className="preline"></div>
          <h2 className={"title-creations"} ref={titleRef}>
            Les Créations
          </h2>
        </div>
        <p className="inner-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          ratione alias, quia laborum sint, autem quod nihil sapiente. quidem
          aspernatur vitae eaque obcaecati reiciendis inventore consequuntur
          consequatur error mollitia provident!"
        </p>
      </S.TextWrapper>
    </GridContainer>
  );
};

export default HeaderTree;
