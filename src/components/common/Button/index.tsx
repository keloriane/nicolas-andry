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

  padding: 6px;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;

  transition: all 0.2s ease-in;
  &:hover {
    border: 1px solid ${theme.colors.orangeDarker};
    color: ${theme.colors.orangeDarker};
  }

  @media (max-width: 600) {
    .innnerBtn {
      font-size: 15px;
    }
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
      <ButtonContainer>
        <span className="innnerBtn">{text}</span>{" "}
      </ButtonContainer>
    </Link>
  );
};

export default Button;
