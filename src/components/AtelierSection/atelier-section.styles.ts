import styled from "styled-components";
import GridContainer from "../common/Container";
import { theme } from "@/styles/theme";

export const SectionItem = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin-left: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    .image_container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .atelier_image_item {
        max-width: 280px;
      }
    }
  }

  .text_container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex: 2;
    ul {
      margin-left: 20px;
    }
  }
  .text_wrapper {
    margin-left: 20px;
  }

  .image_container {
    padding: 20px;

    flex: 1;
  }

  height: 100%;
  align-items: center;

  li {
    list-style: disc;
  }

  p,
  li {
    line-height: 30px;
  }
`;

export const SectionNav = styled.div`
  position: absolute;
  top: 85px;
  @media (max-width: 680px) {
    display: none;
  }
  li {
    line-height: 30px;
    color: ${theme.colors.black};
    &:hover {
      color: ${theme.colors.orange};
      font-weight: 700;
    }
  }
`;

export const StyledGridContainer = styled(GridContainer)`
  position: relative;
  padding-bottom: 200px;
  overflow-y: scroll;
`;
