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

const AboutWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  .image_container {
  }

  .text_container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
      height: 2px;
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
      <div className="image_container">
        <div className="profile_pic">
          <Image
            src={urlFor(imageProfile).url()}
            alt={"post.title"}
            width={320}
            height={420}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
      <div className="text_container">
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
            {presentationTitle}
          </ResponsiveText>
        </div>

        <div className={archivo.className}>
          <div className="rich-text">
            <PortableText value={presentationText} />
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutSection;
