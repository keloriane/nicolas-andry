"use client";
import React from "react";
import GridContainer from "../Container";
import Col from "../Col";
import { PageHeaderType } from "@/types";
import * as S from "./page-header.styles";
import ResponsiveText from "../ResponsiveText";
import { playfare } from "@/app/font";

const PageHeader: React.FC<PageHeaderType> = ({
  title,
  introductionText,
  playfare,
}) => {
  return (
    <S.PageHeaderContainer>
      <GridContainer colCount={24} colGap={20} className="header-wrapper">
        <Col column={[2, 2, 2, 2, 8]} span={[22, 22, 22, 22, 11]}>
          <ResponsiveText
            as="h1"
            sizes={["30px", "30px", "60px", "104px"]}
            className={playfare}
          >
            {title}
          </ResponsiveText>
          <ResponsiveText as="p" sizes={["14px", "18px", "18px", "18px"]}>
            {introductionText}
          </ResponsiveText>
        </Col>
      </GridContainer>
    </S.PageHeaderContainer>
  );
};
export default PageHeader;
