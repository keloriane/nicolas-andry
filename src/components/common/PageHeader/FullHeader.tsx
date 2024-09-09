"use client";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { PageHeaderType } from "@/types";
import { urlFor } from "@/lib/imageBuilder";
import { theme } from "@/styles/theme";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import * as S from "./page-header.styles";

gsap.registerPlugin(ScrollTrigger);

interface FullHeaderProps {
  title: string;
  introductionText: string;
  playfare: any;
}

const FullHeader: React.FC<FullHeaderProps> = ({
  title,
  introductionText,
  playfare,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      color: ${theme.colors.orange};
      font-size: 34px;
    }
    h1 {
      font-size: 64px;
      margin-left: 30px;
      margin-bottom: 20px;
    }
    .preline {
      width: 40px;
      border: 0.5px solid ${theme.colors.orange};
    }
    .title_container {
      display: flex;
      align-items: center;
    }
  `;

  return (
    <SectionContainer style={{ paddingTop: "180px", textAlign: "center" }}>
      <div className="title_container">
        <div className="preline"></div>
        <h1 className={playfare}>{title}</h1>
      </div>
      <p>{introductionText}</p>
    </SectionContainer>
  );
};

export default FullHeader;
