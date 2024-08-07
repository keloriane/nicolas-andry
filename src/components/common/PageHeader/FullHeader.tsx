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

const FullHeader: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ paddingTop: "180px", textAlign: "center" }}>
      <h2 className={playfare}>{title}</h2>
      <p>{introductionText}</p>
    </section>
  );
};

export default FullHeader;
