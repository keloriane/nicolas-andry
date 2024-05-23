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
const TextContainer = styled.div`
  text-align: center;
  font-weight: 100;
  p {
    line-height: 30px;
  }
`;

const HeaderContainer = styled.header`
  padding-top: 150px;
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
  return (
    <HeaderContainer>
      <GridContainer colCount={13} rowGap={75}>
        <Col column={[2, 2, 2, 3, 3]} span={[11, 11, 12, 9, 9]}>
          <TextContainer>
            <ResponsiveText
              sizes={["45px", "85px", "85px"]}
              className={clash}
              as="h1"
            >
              {title}
              <br />
              <span style={{ color: theme.colors.orange }}>{subtitle}</span>
            </ResponsiveText>
          </TextContainer>
        </Col>
        <Col column={[2, 2, 2, 4, 4]} span={[11, 11, 12, 7, 7]}>
          <TextContainer className={satoshi}>
            <PortableText value={presentationText} />
          </TextContainer>
        </Col>
        <Col column={7} span={1}>
          <Button href="/" text="Découvrir" />
        </Col>
      </GridContainer>
    </HeaderContainer>
  );
};
export default Hero;
