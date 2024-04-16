import React from "react";
import ResponsiveText from "../common/ResponsiveText";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Button from "../common/Button";
const TextContainer = styled.div`
  text-align: center;
  font-weight: 100;
  p {
    line-height: 30px;
  }
`;
const Hero = ({ clash, satoshi }: { clash: string; satoshi: string }) => {
  return (
    <header>
      <GridContainer colCount={13} rowGap={75}>
        <Col column={[2, 2, 2, 3, 3]} span={[11, 11, 12, 9, 9]}>
          <TextContainer>
            <ResponsiveText
              sizes={["45px", "85px", "85px", "105px", "105px"]}
              className={clash}
              as="h1"
            >
              Nicolas Andry Photographie
            </ResponsiveText>
          </TextContainer>
        </Col>
        <Col column={[2, 2, 2, 4, 4]} span={[11, 11, 12, 7, 7]}>
          <TextContainer>
            <ResponsiveText
              sizes={["13px", "16px", "24px"]}
              className={satoshi}
            >
              Muer en gestes les questions, besoins, émotions.Pétrir ces
              matières, qui me pétrissent à leur tour.Être témoin de la forme
              qui émerge, trace sensible de l'expérience vécue et du chemin
              parcouru.La mettre au monde, pour rendre ce qui fut reçu.
            </ResponsiveText>
          </TextContainer>
        </Col>
        <Col column={7} span={1}>
          <Button text="Découvrir" href="/" />
        </Col>
      </GridContainer>
    </header>
  );
};
export default Hero;
