import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

interface ButtonContainerProps {
  light?: boolean;
  maxWidth?: string;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  border: 1px solid black;
  width: 100%;
  padding: 15px 17px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  max-width: ${(props) => props.maxWidth};

  ${(props) =>
    props.light &&
    css`
      border-color: white;
      color: white;
    `}
`;

const Button = ({
  text,
  href,
  light = false,
  className,
  maxWidth,
}: {
  text: string;
  href: string;
  light?: boolean;
  className?: string;
  maxWidth?: string;
}) => {
  return (
    <ButtonContainer light={light} className={className} maxWidth={maxWidth}>
      <Link href={href}>{text}</Link>
    </ButtonContainer>
  );
};

export default Button;
