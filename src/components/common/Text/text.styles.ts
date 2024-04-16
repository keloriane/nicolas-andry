import styled, { css } from "styled-components";
import React from "react";
import { FontSizeOrClamp } from "./index";

const defaultFontSize = 1;
const defaultFontUnit = "rem";
const defaultResponsiveFontUnit = "vw";

export interface IText {
  as?: React.ElementType;
  tag?: string;
  backgroundColor?: string;
  color?: string;
  debug?: boolean;
  display?: string;
  fontFamily?: string;
  fontSize?: FontSizeOrClamp | string;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: number | string;
  linkHoverColor?: string;
  linkVisitedColor?: string;
  log?: boolean;
  maxWidth?: number;
  noLink?: boolean;
  opacity?: number;
  stacked?: boolean;
  textTransform?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  variants?: any;
  zIndex?: number;
  children?: any | any[];
  maxLines?: number;
  letterSpacing?: string;
}

export const Text = styled.span<IText>`
  font-size: ${({ fontSize }) => {
    switch (typeof fontSize) {
      case "string":
        return fontSize;
      case "number":
        return fontSize;

      case "string":
        return fontSize;
      case "object":
        return css`clamp(${fontSize.min + defaultFontUnit}, ${
          fontSize.vw + defaultResponsiveFontUnit
        }, ${fontSize.max + defaultFontUnit})`;
      default:
        return defaultFontSize + defaultFontUnit;
    }
  }};

  line-height: ${({ lineHeight }) => lineHeight || 1.2};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}

  ${({ zIndex }) =>
    zIndex &&
    css`
      position: relative;
      z-index: ${zIndex};
    `}

  ${({ stacked }) =>
    stacked &&
    css`
      & > * {
        display: block;
      }
    `}

  ${({ debug }) =>
    debug &&
    css`
      border: 0.5px solid red;
      display: block;
      background: #ffc0c0;

      & > * {
        border: 0.5px solid red;
        display: block;
        background: #ffc0c0;
      }
    `}

  ${({ linkVisitedColor }) =>
    linkVisitedColor &&
    css`
      & > a,
      & > a:visited {
        color: ${linkVisitedColor};
      }
    `}

  ${({ linkHoverColor }) =>
    linkHoverColor &&
    css`
      & > a:hover {
        color: ${linkHoverColor};
      }
    `}

  ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `}

  ${({ fontStyle }) =>
    fontStyle &&
    css`
      font-style: ${fontStyle};
    `}

  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}
  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${letterSpacing};
    `}

  ${({ textDecorationColor }) =>
    textDecorationColor &&
    css`
      text-decoration-color: ${textDecorationColor};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${`${maxWidth}px`};
    `}

  ${({ maxLines }) =>
    maxLines &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${maxLines};
      -webkit-box-orient: vertical;
    `};
`;
