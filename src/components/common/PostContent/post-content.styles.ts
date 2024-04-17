import { playfare } from "@/app/font";
import styled from "styled-components";

export const PostCotainer = styled.div`
  h2,
  h3 {
    font-family: ${playfare.style.fontFamily};
  }
  h3 {
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
    padding: 20px;
    width: 100%;
    border-top: 1px solid #1e1e1e;
    padding-top: 55px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  .post__container {
    margin-top: 40px;
  }
  .slider_container {
    margin-top: 40px;
  }
`;
