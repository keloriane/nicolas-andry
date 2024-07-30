import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto;
  justify-items: center;
  align-items: center;

  .card {
    width: 100%;
    height: 340px;
    overflow: hidden;

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
      background-color: #000c1abf;
      z-index: 1;
    }
  }
`;
