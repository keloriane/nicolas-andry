"use client";
import React, { useRef } from "react";
import { PageHeaderType } from "@/types";
import styled from "styled-components";
import GridContainer from "../Container";
import Col from "../Col";

import MaskedImage from "../MaskedImage";
import HeaderText from "../HeaderText";
import * as S from "./page-header.styles";
import arrowDown from "@/../public/arrow_down.svg";
import Image from "next/image";
import ArrowDown from "../ArrowDown";
import Link from "next/link";
const HeaderMask: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  image,
}) => {
  return (
    <>
      <GridContainer colCount={24} style={{ paddingTop: "150px" }}>
        <Col
          column={[3, 3, 7, 7, 3]}
          span={[21, 21, 21, 21, 10]}
          className="col-image-mask"
        >
          <S.ImageMaskContainer>
            <MaskedImage
              src="https://cdn.sanity.io/images/blzajq7n/production/55be9c19c7da958305ca80e1d81f7aca746b54a3-665x1000.jpg"
              alt="image test mask"
              width={250}
              height={375}
              sizes="(max-width: 1000px) 150px, 250px"
              index={0}
              lazy={true}
            />
            <MaskedImage
              src="https://cdn.sanity.io/images/blzajq7n/production/26783c48f756eea669fd29d715e9e54a21abf1ea-572x1000.jpg"
              alt="image test mask"
              width={350}
              height={550}
              sizes="(max-width: 1000px) 250px, 350px"
              lazy={true}
              index={1}
            />
          </S.ImageMaskContainer>
        </Col>
        <Col
          column={[3, 3, 3, 3, 14]}
          span={[21, 21, 21, 21, 9]}
          className="text-wrapper"
        >
          <HeaderText
            column={[3, 3, 3, 14, 14]}
            span={[21, 21, 21, 9, 9]}
            title={title}
            introductionText={introductionText}
            playfare={playfare}
          />
        </Col>
      </GridContainer>
      <S.ArrowDown className="ar_cta">
        <Link href="#creations" className="svg_cta">
          <ArrowDown />
        </Link>
      </S.ArrowDown>
    </>
  );
};

export default HeaderMask;
