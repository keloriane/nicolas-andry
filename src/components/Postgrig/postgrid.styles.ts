import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostGridCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
    height: 100%;
  }
  gap: 20px;
  padding: 80px 20px;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 528px) {
    grid-template-columns: 1fr;
  }

  .card {
    width: 400px;
    height: 340px;
    overflow: hidden;

    /* border: 1px solid ${theme.colors.black}; */

    position: relative;
    display: flex;
    align-items: flex-end;

    .text_container {
      position: relative;
      z-index: 2;
      color: white;
      .title_container {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      h2 {
        font-size: 20px;
        margin: 10px 0;
        @media screen and (max-width: 840px) {
          font-size: 16px;
        }
      }
      p {
        font-size: 12px;
        line-height: 18px;
        margin-top: 4px;
      }
    }
    .preline {
      height: 2px;
      width: 30px;
      background-color: ${theme.colors.orangeDarker};
    }
    img {
      object-fit: cover;
      z-index: 1;
    }
    .layer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -35%;
      left: 0;
      width: 100%;
      padding: 20px;
      background-color: #222222bf;
      z-index: 1;
    }
    @media screen and (max-width: 840px) {
      .layer {
        left: 0 !important;
        width: 100% !important;
        /* padding: 20px; */
        background-color: #222222bf;
        z-index: 1;
        top: 82% !important;
        height: 18% !important;
        font-size: 12px;
      }
    }
  }
`;

export const PostGrid = styled.div<{ $singleItem?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$singleItem ? "1fr" : "repeat(3, 1fr)"};
  justify-items: center;

  .card {
    position: relative;
    overflow: hidden; /* Ensures the hover layer doesn't spill out */
  }

  .card .hover-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 165, 0, 0.6); /* Orange color with opacity */
    opacity: 0; /* Initially invisible */
    transition: opacity 0.3s ease-in-out; /* Smooth transition */
    pointer-events: none; /* Prevents blocking clicks */
  }

  .card:hover .hover-layer {
    opacity: 1; /* Fully visible on hover */
  }

  .text_container {
    position: relative;
    z-index: 2; /* Ensures text appears above the hover layer */
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.$singleItem ? "1fr" : "repeat(2, 1fr)"};
  }
  @media screen and (max-width: 528px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  padding: 80px 20px;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto 80px;
  @media screen and (max-width: 888px) {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }

  .card {
    width: 100%;
    height: 340px;
    overflow: hidden;
    max-width: ${(props) => (props.$singleItem ? "600px" : "none")};
    &:hover {
      .layer {
        background-color: rgba(255, 159, 3, 0.75);
        transition: 0.2s ease-in;
      }
    }

    /* border: 1px solid ${theme.colors.black}; */

    position: relative;
    display: flex;
    align-items: flex-end;

    .text_container {
      position: relative;
      z-index: 2;
      color: white;
      .title_container {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      h2 {
        font-size: 20px;
        margin: 10px 0;
        @media screen and (max-width: 840px) {
          font-size: 16px;
        }
      }
      p {
        font-size: 12px;
        line-height: 18px;
        margin-top: 4px;
      }
    }
    .preline {
      height: 2px;
      width: 30px;
      background-color: ${theme.colors.orangeDarker};
    }
    img {
      object-fit: cover;
      z-index: 1;
    }
    .layer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -35%;
      left: 0;
      width: 100%;
      padding: 20px;
      background-color: #222222bf;
      z-index: 1;
    }

    .layer {
      left: 0 !important;
      width: 100% !important;
      /* padding: 20px; */

      border-color: none;
      z-index: 1;
      top: 82% !important;
      height: 18% !important;
      font-size: 12px;
    }
  }
`;
