"use client";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import { theme } from "@/styles/theme";
import { CTA } from "../common/Button/cta";
import GridContainer from "../common/Container";
import Col from "../common/Col";

const AboutWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  .about-grid {
    align-items: center;
  }
  .profile_pic {
    padding: 20px;
    border: 1px solid ${theme.colors.black};
    max-width: 400px;
    margin: auto;
  }

  .text_container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 768px) {
      text-align: center;
      align-items: center;
      .preline {
        display: none;
      }
    }
    .name_wrapper {
      color: ${theme.colors.black};
      display: flex;
      align-items: center;
      gap: 24px;
    }
    h3 {
      font-size: 24px;
    }
    .preline {
      width: 55px;
      height: 1px;
      background-color: ${theme.colors.orange};
    }
  }
`;
const AboutSection = ({
  imageProfile,
  presentationTitle,
  presentationText,
}: {
  imageProfile: string;
  presentationTitle: string;
  presentationText: TypedObject | TypedObject[];
}) => {
  return (
    <AboutWrapper>
      <GridContainer
        colCount={24}
        colGap={24}
        rowGap={24}
        className="about-grid"
      >
        <Col column={[3, 3, 3, 3, 3]} span={[20, 20, 20, 9, 9]}>
          <div className="text_container">
            <div className="name_wrapper">
              <div className="preline"></div>
              <h3 className={playfare.className}>Nicolas Andry</h3>
            </div>
            <ResponsiveText
              sizes={["20", "24", "45"]}
              as="h2"
              className={playfare.className}
            >
              {/* {presentationTitle} */}À propos de moi
            </ResponsiveText>

            <div className={archivo.className}>
              <div className="rich-text">
                <PortableText value={presentationText} />
              </div>
            </div>
            <div className="cta_container">
              <CTA href="/a-propos">En savoir plus</CTA>
            </div>
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
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </Col>
      </GridContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
