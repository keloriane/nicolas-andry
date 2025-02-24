import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostContainer = styled.div`
  padding-top: 50px;
  img {
    max-width: 1280px;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0;
    .info_container {
      max-width: 320px;
      margin: auto;
      padding: 10px;
    }
  }

  .text_container {
    position: relative;
    z-index: 10;
    padding-bottom: 44px;
  }

  .info_container {
    max-width: 720px;
    margin: auto;
  }

  .breadcrumb {
    font-size: 15px;
    color: #919191;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: underline;
    }

    .active_item {
      color: ${theme.colors.orange};
      font-weight: 500;
    }
  }

  .thanks_container {
    width: 100%;
    max-width: 640px;
    padding-top: 150px;
    margin: auto;

    h2 {
      font-size: 36px;
      text-align: center;
      display: inline-block;
      width: 100%;
    }
    blockquote {
      font-weight: 100;

      line-height: 32px;
    }
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
    position: relative;
    width: 100%;
  }

  .image_hero_wrapper {
    position: relative;
    width: 50%;
    margin: auto;
    height: 50%;
    @media screen and (max-width: 1300px) {
      padding-top: 31%;
    }
    padding-top: 26.25%; /* This maintains a 16:9 aspect ratio */
  }

  h1 {
    font-size: 72px;
    text-align: center;
    @media screen and (max-width: 760px) {
      font-size: 36px;
    }
  }

  .image_hero_layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
  }

  .thanks_container {
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 20px;
    h2 {
      font-size: 30px;
      display: inline-block;
    }
  }

  .title_container {
    text-align: center;
    h2 {
      color: ${theme.colors.orange};
      @media screen and (max-width: 760px) {
        font-size: 24px;
      }
    }
    h3 {
      color: ${theme.colors.black};
      @media screen and (max-width: 760px) {
        font-size: 24px;
      }
    }
  }
  .rich-text {
    margin: auto;
    max-width: 1280px;
    width: 100%;
    margin-top: 24px;
    padding: 20px;

    ul {
      margin-top: 15px;
      margin-left: 30px;
    }
    li {
      line-height: 40px;
      list-style: disc;
    }
    a {
      color: #0000ee;
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
  h3 {
    font-size: 32px;
    color: ${theme.colors.orange};
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
