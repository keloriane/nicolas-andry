import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;

  .image_header_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;

    @media screen and (max-width: 768px) {
      width: 320px;
      margin: auto;
      display: none;
    }
  }

  .rich-text {
    display: flex;
    align-items: flex-start;
    .arrow_link {
      margin: 8px;
    }
    .inner_text {
      display: flex;
      flex-direction: column;
    }
    a {
      color: ${theme.colors.orange};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .image_wrapper {
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* Add transition effect */
  }

  .image_wrapper.loaded {
    opacity: 1;
  }
  h2,
  h3 {
    font-family: ${playfare.style.fontFamily};
  }
  h3 {
    color: ${theme.colors.orange};
    font-size: 34px;
  }
  h2 {
    font-size: 47px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
  }
  nav {
    width: 100%;
    border-top: 1px solid #1e1e1e;
    padding-top: 55px;
  }

  .header_info {
    display: flex;
    width: 100%;
    height: 400px;
    .text_header_wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      h3 {
        display: inline-block;
        margin-top: 20px;
      }
    }
  }
  .image_header {
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      max-height: 400px;
    }
  }
  .post__container {
    margin: 100px auto;

    div {
      padding: 3px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .slider_container {
    margin-top: 40px;
  }
`;

export const GridContainerV = styled.div`
  column-count: 4;
  margin-top: 100px;
  padding: 24px;
  figure {
    margin-bottom: 20px;
  }
  @media (max-width: 800px) {
    column-count: 2;
  }
  @media (max-width: 480px) {
    column-count: 1;
  }
  figure > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  p {
    text-align: center;
    font-size: 32px;
    color: ${theme.colors.orange};
  }
`;

export const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;

  .image_wrapper {
    cursor: pointer;
    position: relative;
    &:hover {
      transform: scale(1.15);
    }
  }
  .image_grid_item {
    transition: transform 0.5s;
  }
`;
