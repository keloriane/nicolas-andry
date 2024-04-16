import styled from "styled-components";

export const HeroTitle = styled.h1`
  margin-top: 90px;
  text-transform: uppercase;
  width: 100%;
  grid-column: 1 / -1;
  font-size: calc((100vw - 48px) * 0.1695);
  letter-spacing: -0.05em;
  line-height: 0.85em;
  margin-bottom: 0px;
  text-align: center;
  font-weight: 700;
`;

export const buyCost = styled.h2`
  display: flex;
  flex-flow: column;
  align-items: end;
  hr {
    height: 1px;
  }
`;

export const TitleSection = styled.h2`
  font-size: 56px;
  grid-column: span 7;
  text-transform: uppercase;
  line-height: 1em;
  font-weight: 700;
  max-width: 14em;
`;

export const ImageLayer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
`;

export const SectionShop = styled.section`
  .shop-item {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: column;
    img {
      width: 80%;
      object-fit: cover;
    }
  }
`;

export const AboutSection = styled.section`
  .about-wrapper {
    display: flex;
    flex-flow: column;
    gap: 40px;
    height: 100%;
  }
  h2 {
    font-size: 24px;
    line-height: 22px;
    font-weight: 700;
  }
  .about-text {
    display: flex;
    flex-flow: column;
    gap: 20px;
    height: 100%;
  }
`;
