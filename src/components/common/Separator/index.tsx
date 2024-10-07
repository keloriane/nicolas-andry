"use client";
import React from "react";
import { theme } from "@/styles/theme";
import styled from "styled-components";

const Line = styled.div`
  width: 270px;
  height: 1px;
  background-color: ${theme.colors.black};
`;
const Separator = ({ size = 100 }: { size?: number }) => {
  return <Line style={{ margin: `${size}px auto` }} />;
};

export default Separator;
