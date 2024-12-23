"use client";
import React, { useRef } from "react";
import ResponsiveText from "../common/ResponsiveText";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { PortableText } from "next-sanity";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { archivo, playfare } from "@/app/font";

import Image from "next/image";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  font-weight: 100;
  width: 100%;
  padding: 20px;

  position: relative;
  z-index: 10;
  margin: 150px auto;
  p {
    line-height: 42px;
    font-size: 24px;
    color: #606060;
    font-weight: 100;

    @media screen and (max-width: 740px) {
      font-size: 14px;
    }
  }
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  opacity: 0; // Initially hidden
  transition: opacity 0.1s ease-in; // Smooth transition
  padding-top: 58px;
  @media screen and (max-width: 760px) {
    padding-top: 0px;
  }
  .title-main {
    color: ${theme.colors.white};
    font-family: ${playfare.style.fontFamily};
  }
  .subtitle-main {
    font-family: ${playfare.style.fontFamily};
  }

  .text_wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
  .hero {
    width: 100vw;
    height: 80vh;
    position: relative;
    display: flex;
  }
  .hero_layer {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    z-index: 1;
    background: linear-gradient(
      75deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 41%,
      rgba(21, 21, 21, 0.32) 71%,
      rgba(102, 102, 102, 0.23) 108%,
      rgba(70, 70, 70, 1) 100%
    );
    img {
      object-fit: cover;
    }
  }
  .svg_cta {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Hero = ({
  title,
  subtitle,
  presentationText,
  image,
}: {
  satoshi: string;
  title: string;
  subtitle: string;
  presentationText: [];
  image: string;
}) => {
  const heroContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mainTitle = new SplitType("h1.title-main", {
      types: "words",
    });
    const subTitle = new SplitType("h2.subtitle-main", {
      types: "words",
    });
    const paragraphe = new SplitType(".text-hero p", {
      types: "lines",
    });

    gsap.set([mainTitle.words, subTitle.words, paragraphe.lines], {
      opacity: 0,
    });

    const chars = mainTitle.words;
    const chars2 = subTitle.words;
    const lines = paragraphe.lines;
    gsap.to(heroContainer.current, { autoAlpha: 1 });
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
      chars2,
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
        delay: 0.5,
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
        duration: 0.6,
        ease: "power4.out",
        delay: 0.5,
      }
    );
  });

  return (
    <HeaderContainer ref={heroContainer}>
      <div className="hero dark_bg">
        <div className="hero_layer"></div>
        <div className="image_wrapper">
          <Image
            src={image}
            alt=""
            fill
            className="image_background"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text_wrapper">
          <ResponsiveText
            sizes={["48px", "36px", "90px"]}
            className="title-main"
            as="h1"
          >
            <span>{title}</span>
          </ResponsiveText>
          <ResponsiveText
            sizes={["48px", "36px", "90px"]}
            className="subtitle-main"
            as="h2"
          >
            <span style={{ color: "#FEB865" }}>{subtitle}</span>
          </ResponsiveText>
        </div>
      </div>

      <TextContainer className="rich-text text-hero">
        <div className={archivo.className}>
          <PortableText value={presentationText} />
        </div>
      </TextContainer>
    </HeaderContainer>
  );
};
export default Hero;
