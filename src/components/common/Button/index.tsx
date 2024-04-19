import { archivo } from "@/app/font";
import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

interface ButtonContainerProps {
  light?: boolean;
  maxWidth?: string;
}

const ButtonContainer = styled.span<ButtonContainerProps>`
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.black};
  width: 100%;
  padding: 15px 17px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  max-width: ${(props) => props.maxWidth};
  transition: all 0.2s ease-in;
  &:hover {
    border: 1px solid ${theme.colors.orangeDarker};
    color: ${theme.colors.orangeDarker};
  }

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

  className,
  maxWidth,
}: {
  text: string;
  href: string;

  className?: string;
  maxWidth?: string;
}) => {
  return (
    <Link href={href} className={archivo.className}>
      <ButtonContainer>{text}</ButtonContainer>
    </Link>
  );
};

export default Button;
