import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import TransitionLink from "../TransitionLink";

const CTAContainer = styled.div`
  padding: 10px;
  border: 1px solid ${theme.colors.black};
  display: inline-block;
  &:hover {
    background-color: ${theme.colors.black};
    color: white;
  }
  a {
    text-decoration: none;
    font-size: 17px;
    text-transform: uppercase;
    &:hover {
      color: white !important;
    }
  }
`;

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <div>Button</div>;
};

export const CTA = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <CTAContainer className={className}>
      <TransitionLink href={href}>{children}</TransitionLink>
    </CTAContainer>
  );
};
