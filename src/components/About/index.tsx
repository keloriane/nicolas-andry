"use client";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { useRef } from "react";
import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import { CTA } from "../common/Button/cta";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import * as S from "./about.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import { imageClipAnimation } from "@/mixins/animations";
import PrelineTitle from "../common/PrelineTitle";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({
  imageProfile,
  presentationText,
  homePage = false,
  locale = "fr",
}: {
  imageProfile: string;
  presentationTitle: string;
  presentationText: TypedObject | TypedObject[];
  homePage: boolean;
  locale?: string;
}) => {
  return (
    <S.AboutWrapper>
      <GridContainer
        colCount={24}
        colGap={24}
        rowGap={24}
        className="about-grid"
      >
        <Col column={[3, 3, 3, 3, 3]} span={[20, 20, 20, 9, 9]}>
          <div className="text_container">
            <h3>
              <PrelineTitle>Nicolas Andry</PrelineTitle>
            </h3>
      
            <div className={archivo.className}>
              <div className="rich-text">
                <PortableText value={presentationText} />
              </div>
            </div>
            {homePage ? (
              <div className="cta_container">
                <CTA href={`/${locale}/a-propos`}>En savoir plus</CTA>
              </div>
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col column={[3, 3, 3, 15, 15, 15]} span={[20, 20, 18, 9, 9, 7]}>
          <div className="image_container">
            <div className="profile_pic">
              <Image
                src={urlFor(imageProfile).url()}
                alt={"post.title"}
                width={381}
                height={477}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </Col>
      </GridContainer>
    </S.AboutWrapper>
  );
};

export default AboutSection;
