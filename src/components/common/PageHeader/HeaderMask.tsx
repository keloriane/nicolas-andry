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
import { urlForImage } from "../../../../sanity/lib/image";
const HeaderMask: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
  imageLeft,
  imageRight,
}) => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <GridContainer colCount={24}>
        <Col
          column={[3, 3, 7, 7, 3]}
          span={[21, 21, 21, 21, 10]}
          className="col-image-mask"
        >
          <S.ImageMaskContainer>
            <MaskedImage
              src={imageLeft}
              alt="image test mask"
              width={250}
              height={375}
              sizes="(max-width: 1000px) 150px, 250px"
              index={0}
              lazy={true}
            />
            <MaskedImage
              src={imageRight}
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
    </div>
  );
};

export default HeaderMask;
