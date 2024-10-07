import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostContainer = styled.div`
  .text_container {
    position: relative;
    z-index: 10;
    padding-bottom: 44px;
  }
  .creation_title {
    font-family: ${playfare.style.fontFamily};
    color: ${theme.colors.white};
  }
  .creation_subtitle {
    font-family: ${playfare.style.fontFamily};
    color: ${theme.colors.orangeL};
  }
  .hero {
    width: 100vw;
    height: 80vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    color: white;
  }

  .hero_layer {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    z-index: 1;
    background: linear-gradient(
      75deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 41%,
      rgba(21, 21, 21, 0.32) 71%,
      rgba(102, 102, 102, 0.23) 108%,
      rgba(70, 70, 70, 1) 100%
    );
    img {
      object-fit: contain;
    }
  }

  .thanks_container {
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 20px;
    h2 {
      font-size: 30px;
      display: inline-block;
    }
    .rich-text {
      margin-top: 20px;
    }
  }

  .rich-text {
    ul {
      margin-top: 15px;
      margin-left: 30px;
    }
    li {
      line-height: 40px;
      list-style: disc;
    }
    a {
      color: aliceblue;
    }
    p {
      margin-top: 20px;
    }
  }

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

  .navigation_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    gap: 24px;
    margin-top: 100px;
    margin-bottom: 100px;
    font-weight: 400;
    @media screen and (max-width: 480px) {
      padding: 25px;
    }
    a:hover {
      color: ${theme.colors.orange};
    }
  }

  .navigation_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    ul {
      width: 100%;
      max-width: 960px;
      margin: auto;
      justify-content: center;
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }
  }

  .image_wrapper {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .image_wrapper.loaded {
    opacity: 1;
  }
  h2,
  h3 {
    font-family: ${playfare.style.fontFamily};
  }

  h2 {
    font-size: 47px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
  }

  .header_info {
    display: flex;
    width: 100%;
    height: 400px;
    .text_header_wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      gap: 20px;
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
    ul {
      margin-top: 15px;
      margin-left: 50px;
    }
    li {
      line-height: 40px;
      list-style: disc;
    }
    a {
      color: aliceblue;
    }

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
  width: 100%;
  max-width: 1280px;
  margin: auto;
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
