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
import { archivo, playfare } from "@/app/font";

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
  .profil_pic {
    position: relative;
  }

  .profil_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0px;
    p {
      line-height: 30px;
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
    position: relative;

    ul {
      list-style-type: disc;
      margin-left: 20px;
      border-bottom: 1px solid ${theme.colors.black};
      padding-bottom: 15px;
    }
  }
  .year-wrapper {
    background-color: ${theme.colors.orange};

    padding: 2px 10px;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.white};
    max-width: 65px;
    font-weight: 600;
    p {
      font-weight: 700;
    }
  }
`;

const Parcours = ({
  parcours,
  imageProfile,
  presentationText,
  presentationTitle,
}: {
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
  presentationTitle: string;
}) => {
  return (
    <ParcoursContainer>
      <GridContainer colCount={24} colGap={20} className="main-wrapper">
        <Col
          column={[2, 2, 3]}
          span={[24, 20, 20]}
          className="parcours-wrapper"
        >
          <div className="parcour-container">
            {parcours.map((parcour, index) => (
              <div className={"parcour-card rich-text"} key={index}>
                <span className={"year-wrapper"}>
                  <p className={archivo.className}>{parcour.year}</p>
                </span>
                <div className={archivo.className}>
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
