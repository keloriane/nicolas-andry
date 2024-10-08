"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import splitType from "split-type";
import * as S from "./../PageHeader/page-header.styles";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";

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

  useEffect(() => {
    if (titleRef.current && textRef.current) {
      const titleWrapper = new splitType(titleRef.current, {
        types: "words",
      });
      const textWrapper = new splitType(textRef.current, { types: "lines" });
      const chars = titleWrapper.words;
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
          duration: 1.3,
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
    }
  }, []);

  return (
    <S.TextWrapper column={column} span={span}>
      <div className="title-container">
        <div className="preline"></div>
        <h1 className="title-creations" ref={titleRef}>
          {title}
        </h1>
      </div>
      <div className="inner-text" ref={textRef}>
        <PortableText value={introductionText} />
      </div>
    </S.TextWrapper>
  );
};

export default HeaderText;
