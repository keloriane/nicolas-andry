import { theme } from "@/styles/theme";
import { PortableText } from "next-sanity";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-weight: 100;
    font-size: 16px;
    line-height: 30px;
  }
`;

const HeadlineContainer = styled.div`
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};
  font-weight: 600;
  width: max-content;
  padding: 5px;
  display: inline-block;
`;
const ProcedureCard = ({ title, text }: { title: string; text: [] }) => {
  return (
    <CardContainer>
      <HeadlineContainer>
        <h3>{title}</h3>
      </HeadlineContainer>
      <div className="rich-text">
        <PortableText value={text} />
      </div>
    </CardContainer>
  );
};
export default ProcedureCard;
