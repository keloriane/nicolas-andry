"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import * as S from "./../PageHeader/page-header.styles";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import ArrowDown from "../ArrowDown";
import Link from "next/link";
import PrelineTitle from "../PrelineTitle";

interface HeaderTextProps {
  title: string;
  introductionText: TypedObject | TypedObject[];
  playfare: string;
  column: number[];
  span: number[];
}

const HeaderText: React.FC<HeaderTextProps> = ({
  title,
  introductionText,
  playfare,
  column,
  span,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    gsap.to(window, { duration: 0.1, scrollTo: "#photo-items" });
  };

  return (
    <S.TextWrapper column={column} span={span}>
      <h1 ref={titleRef}>
        <PrelineTitle>{title}</PrelineTitle>
      </h1>

      <div className="inner-text" ref={textRef}>
        <PortableText value={introductionText} />
      </div>
      <S.ArrowDown className="ar_cta">
        <Link href="#photo-items" className="svg_cta" onClick={handleScroll}>
          <ArrowDown />
        </Link>
      </S.ArrowDown>
    </S.TextWrapper>
  );
};

export default HeaderText;
