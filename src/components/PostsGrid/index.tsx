import React from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import styled from "styled-components";
import CreationImage from "@/../public/monsnochrome-04.jpg";
import RechercheImage from "@/../public/recherches-cycle1-11.jpg";
import AtelierImagae from "@/../public/coulisses-ateliers-06.jpg";
import ImageParallax from "../common/ImageParallax";
import Button from "../common/Button";

const LayerCard = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0%;
  left: 1px;
  background: rgb(42, 24, 18);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  background: linear-gradient(
    0deg,
    rgba(42, 24, 18, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
  z-index: 2;
  color: white;
  text-align: center;
  h3 {
    font-size: 30px;
  }
`;

const CardWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 19px;
  }
`;
const PostsGrid = ({
  playfare,
  archivo,
}: {
  playfare: string;
  archivo: string;
}) => {
  return (
    <GridContainer
      colCount={24}
      colGap={20}
      rowGap={20}
      style={{ padding: "0 20px" }}
    >
      <Col column={[1, 1, 1, 1]} span={[24, 24, 8, 8]}>
        <ImageParallax src={AtelierImagae.src} height="80%" />
        <LayerCard>
          <CardWrapper>
            <h3 className={playfare}>Recherches</h3>
            <p className={archivo}>
              Réalisations personnelles et travaux de commandes
            </p>
            <Button
              maxWidth="147px"
              text="Découvrir"
              href="/"
              light
              className={archivo}
            ></Button>
          </CardWrapper>
        </LayerCard>
      </Col>
      <Col column={[1, 1, 9, 9]} span={[24, 24, 8, 8]}>
        <ImageParallax src={CreationImage.src} height="80%" />
        <LayerCard>
          <CardWrapper>
            <h3 className={playfare}>Création</h3>
            <p className={archivo}>
              Réalisations personnelles et travaux de commandes
            </p>
            <Button
              maxWidth="147px"
              text="Découvrir"
              href="/"
              light
              className={archivo}
            ></Button>
          </CardWrapper>
        </LayerCard>
      </Col>
      <Col column={[1, 1, 17, 17]} span={[24, 24, 8, 8]}>
        <ImageParallax src={RechercheImage.src} height="80%" />
        <LayerCard>
          <CardWrapper>
            <h3 className={playfare}>Atelier</h3>
            <p className={archivo}>
              Réalisations personnelles et travaux de commandes
            </p>
            <Button
              maxWidth="147px"
              text="Découvrir"
              href="/"
              light
              className={archivo}
            ></Button>
          </CardWrapper>
        </LayerCard>
      </Col>
    </GridContainer>
  );
};
export default PostsGrid;
