import styled from "styled-components";
import Col from "../Col";
import { theme } from "@/styles/theme";
import Image from "next/image";

export const PageHeaderContainer = styled.div`
  z-index: 10;
  position: relative;
  .header-wrapper div {
    display: flex;
    flex-direction: column;
    gap: 42px;
    text-align: center;
    p {
      line-height: 30px;
    }
  }
`;

export const ImageMaskContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media screen and (max-width: 740px) {
    display: none;
  }
  .mask {
    overflow: hidden;
    background: transparent;

    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    object-fit: cover;
  }
  .col-image-mask {
    display: flex;
    align-items: center;
  }

  .ad {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    margin: auto;
    transform-origin: 0 0;
  }
  .maskImage {
    object-fit: cover;
  }
  @media screen and (max-width: 1200px) {
    .maskImage {
      height: 321px;
      width: 187px;
    }
  }
  @media screen and (max-width: 480px) {
    .msk-img {
      display: none;
    }
  }
`;

export const TextWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 20px;
  h2 {
    font-weight: 100;
    font-size: 4rem;
    color: ${theme.colors.black};
    font-family: "__Playfair_Display_e3a538",
      "__Playfair_Display_Fallback_e3a538";
    font-style: normal;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  p {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 20px;
    .preline {
      height: 2px;
      width: 10%;
      background: ${theme.colors.orange};
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    @media screen and (max-width: 1200px) {
      h2 {
        font-size: 3rem;
      }
    }
  }
`;

export const FullHeaderContainer = styled.div`
  position: relative;
  width: 60%;
  height: 43vh;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #0000009e;
  /* background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 2%,
    rgba(255, 255, 255, 0) 68%
  ); */
  z-index: 2;
`;

export const ImageItem = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 7rem;
  color: ${theme.colors.orange};
  opacity: 0;
`;

export const Introduction = styled.p`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0;
`;

export const ArrowDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  cursor: pointer;
`;
