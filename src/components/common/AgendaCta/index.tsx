"use client";
import React from "react";
import { CTA } from "../Button/cta";
import styled from "styled-components";
import Link from "next/link";

const AgendaCta = ({ locale, text }: { locale: string; text: string }) => {
  return (
    <div
      className="main_cta"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <div className="cta_container">
        <Link className="cta" href={`/${locale}/agenda`}>
          <span>{text}</span>
        </Link>
      </div>
    </div>
  );
};

export default AgendaCta;
