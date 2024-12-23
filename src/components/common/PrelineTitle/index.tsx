import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

const TitlePrelineStyle = styled.div`
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  gap: 24px;
  line-height: 100%;

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    .preline {
      display: none;
    }
  }
  .preline {
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.orange};
    margin-top: 10px;
  }
  .word {
    display: flex;
  }
`;

const PrelineTitle = ({ children }: { children: string }) => {
  return (
    <TitlePrelineStyle className="name_wrapper">
      <div className="preline"></div>
      <span className={`${playfare.className}`}>{children}</span>
    </TitlePrelineStyle>
  );
};

export default PrelineTitle;
