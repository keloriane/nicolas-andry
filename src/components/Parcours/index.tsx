"use client";
import React from "react";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { theme } from "@/styles/theme";
import { PortableText } from "next-sanity";

const ParcoursContainer = styled.section`
  .main-wrapper {
    padding: 20px;
    max-width: 1380px;
    margin: auto;
    width: 100%;
  }
  .parcour-card {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 12.5px;
    padding-bottom: 12.5px;
    border-bottom: 1px solid ${theme.colors.black};
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
    background-color: ${theme.colors.black};
    padding: 2px 10px;
    font-size: 18px;
    font-weight: 400;
    color: white;
    max-width: 65px;
  }
`;

const Parcours = ({
  parcours,
}: {
  parcours: [{ year: string; description: [] }];
}) => {
  return (
    <ParcoursContainer>
      <GridContainer colCount={24} colGap={20} className="main-wrapper">
        <Col column={2} span={9}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            explicabo earum ratione praesentium ipsa reprehenderit ab vitae,
            nemo recusandae odio incidunt ex facilis, molestiae sed cum impedit
            neque eaque rem.
          </p>
        </Col>
        <Col column={12} span={13}>
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
