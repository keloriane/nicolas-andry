"use client";
import React from "react";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { theme } from "@/styles/theme";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import ResponsiveText from "../common/ResponsiveText";
import { playfare } from "@/app/font";

const ParcoursContainer = styled.section`
  h2 {
    text-align: center;
    padding: 20px 0px;
  }
  .main-wrapper {
    padding: 20px;
    max-width: 1380px;
    margin: auto;
    width: 100%;
  }

  .profil_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0px;
    p {
      line-height: 20px;
    }
  }
  .parcour-card {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 12.5px;
    padding-bottom: 12.5px;
  }
  .parcour-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
  }
  .year-wrapper {
    background-color: ${theme.colors.orange};
    padding: 2px 10px;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.black};
    max-width: 65px;
    font-weight: 600;
  }
`;

const Parcours = ({
  parcours,
  imageProfile,
  presentationText,
}: {
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
}) => {
  return (
    <ParcoursContainer>
      <GridContainer colCount={24} colGap={20} className="main-wrapper">
        <Col
          column={[2, 2, 2, 2]}
          span={[24, 24, 24, 9, 9]}
          className="profil_container"
        >
          <div className="text_container">
            <ResponsiveText
              sizes={["", "", ""]}
              as="h2"
              className={playfare.className}
            >
              Présentation
            </ResponsiveText>
          </div>

          <div className="text_container">
            <PortableText value={presentationText} />
          </div>

          <div className="profile_pic">
            <Image
              src={urlFor(imageProfile).url()}
              alt={"post.title"}
              width={300}
              height={500}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        </Col>
        <Col
          column={[2, 2, 2, 13]}
          span={[22, 22, 22, 13]}
          className="parcours-wrapper"
        >
          <div className="parcour-container">
            {parcours.map((parcour, index) => (
              <div className={"parcour-card"} key={index}>
                <span className={"year-wrapper"}>
                  <h4>{parcour.year}</h4>
                </span>
                <div>
                  <PortableText value={parcour.description} />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </GridContainer>
    </ParcoursContainer>
  );
};
export default Parcours;
