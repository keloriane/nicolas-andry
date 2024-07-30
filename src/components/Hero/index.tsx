"use client";
import React from "react";
import ResponsiveText from "../common/ResponsiveText";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Button from "../common/Button";
import { theme } from "@/styles/theme";
import AnimatedText from "../common/AnimatedText";
import { PortableText } from "next-sanity";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { archivo } from "@/app/font";
import arrowDown from "@/../public/arrow_down.svg";
import Link from "next/link";

const TextContainer = styled.div`
  text-align: center;
  font-weight: 100;
  width: 100%;
  max-width: 800px;
  margin: auto;
  p {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 24px;
    font-size: 16px;
  }
`;

const HeaderContainer = styled.section`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const Hero = ({
  clash,
  satoshi,
  title,
  subtitle,
  presentationText,
}: {
  clash: string;
  satoshi: string;
  title: string;
  subtitle: string;
  presentationText: [];
}) => {
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

    const chars = mainTitle.words;
    const chars2 = subTitle.words;
    const lines = paragraphe.lines;
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
    <HeaderContainer>
      <TextContainer className={clash}>
        <ResponsiveText
          sizes={["24px", "36px", "60px"]}
          className="title-main"
          as="h1"
        >
          <span>{title}</span>
        </ResponsiveText>
        <ResponsiveText
          sizes={["24px", "36px", "55px"]}
          className="subtitle-main"
          as="h2"
        >
          <span style={{ color: theme.colors.orange }}>{subtitle}</span>
        </ResponsiveText>
      </TextContainer>

      <TextContainer className="rich-text text-hero">
        <div className={archivo.className}>
          <PortableText value={presentationText} />
        </div>
      </TextContainer>

      <Link href="#about">
        <img src={arrowDown.src} alt="arrow down" />
      </Link>
    </HeaderContainer>
  );
};
export default Hero;
