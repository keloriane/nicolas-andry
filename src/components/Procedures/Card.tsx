import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
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
  background-color: black;
  color: #fff;
  font-weight: 600;
  width: 197px;
  padding: 5px;
  display: inline-block;
`;
const ProcedureCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <CardContainer>
      <HeadlineContainer>
        <h3>{title}</h3>
      </HeadlineContainer>
      <div>
        <p>{text}</p>
      </div>
    </CardContainer>
  );
};
export default ProcedureCard;
