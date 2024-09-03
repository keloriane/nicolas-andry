"use client";
import React from "react";
import { CTA } from "../Button/cta";
import styled from "styled-components";

const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AgendaCta = ({ locale }: { locale: string }) => {
  return (
    <CtaContainer className="cta_container" style={{ margin: "100px auto" }}>
      <CTA href={`/${locale}/agenda`}>Vers l'agenda</CTA>
    </CtaContainer>
  );
};

export default AgendaCta;
