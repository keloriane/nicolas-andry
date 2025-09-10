import styled from "styled-components";
import { theme } from "@/styles/theme";

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${theme.colors.orange};
    outline-offset: 2px;
  }
`;

export const HamburgerLines = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  transition: all 0.3s ease;
`;

export const Line = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.black};
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
    transform: ${(props) => (props.$isOpen ? "scaleX(0)" : "none")};
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg) translate(7px, -6px)" : "none"};
  }
`;
