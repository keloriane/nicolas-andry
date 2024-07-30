import { theme } from "@/styles/theme";
import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  p {
    overflow: hidden;
  }

  .profile_pic {
    overflow: hidden;
    background: transparent;
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    object-fit: cover;
  }

  h2,
  h3,
  p {
    font-kerning: none;
  }

  .about-grid {
    align-items: center;
  }
  .profile_pic {
    padding: 20px;
    border: 1px solid ${theme.colors.black};
    max-width: 400px;
    margin: auto;
  }

  .text_container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 768px) {
      text-align: center;
      align-items: center;
      .preline {
        display: none;
      }
    }
    .name_wrapper {
      color: ${theme.colors.black};
      display: flex;
      align-items: center;
      gap: 24px;
    }
    h3 {
      font-size: 24px;
    }
    .preline {
      width: 55px;
      height: 1px;
      background-color: ${theme.colors.orange};
    }
  }
`;
