import { theme } from "@/styles/theme";
import styled from "styled-components";

export const AtelierNavigationSection = styled.div`
  width: 100%;
  max-width: 920px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  margin: 200px auto;

  flex-direction: column;
  @media screen and (max-width: 1280px) {
    max-width: 840px;
  }
  position: relative;
  .atelier_wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0px;

    justify-content: space-between;
  }

  .title_container {
    width: 50%;
    a {
      font-size: 23px;
    }
    hr {
      height: 2px;
      width: 100%;
      margin-top: 40px;
    }
  }

  .image_container {
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: 327px;
    height: 433px;
    position: absolute;
    top: -43%;
    right: 0;
    bottom: 0;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`;
