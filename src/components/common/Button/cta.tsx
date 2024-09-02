import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import TransitionLink from "../TransitionLink";

const CTAContainer = styled.div`
  padding: 10px;
  border: 1px solid ${theme.colors.black};
  display: inline-block;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    border: 1px solid ${theme.colors.orange} !important;
    color: ${theme.colors.orange};
    border: none;
  }
  a {
    text-decoration: none;
    font-size: 17px;
    text-transform: uppercase;
    &:hover {
      border-color: ${theme.colors.orange};
      color: ${theme.colors.orange};
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
  homePage = false,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  homePage?: boolean;
}) => {
  return (
    <CTAContainer className={className}>
      <TransitionLink href={href}>{children}</TransitionLink>
    </CTAContainer>
  );
};
