import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostCotainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
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
    font-size: 18px;
    line-height: 30px;
  }
  nav {
    width: 100%;
    border-top: 1px solid #1e1e1e;
    padding-top: 55px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    gap: 60px;
    flex-wrap: wrap;

    li {
      cursor: pointer;
      &:hover {
        color: ${theme.colors.orange};
      }
    }
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
    }
    .image_header_wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      background-color: blue;
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

export const ImageGridContainer = styled.div`
  border-top: 1px solid ${theme.colors.black};
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 99%;
  margin: auto;

  .col_image_item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .img-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
  }

  .react-photo-album {
    max-width: 1280px;
    margin: auto;
    width: 100%;

    img {
      object-fit: cover;
    }
  }
`;
