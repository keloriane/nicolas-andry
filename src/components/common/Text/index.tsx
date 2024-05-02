import React from 'react';

import * as S from './text.styles';

interface Clamp {
  min: number;
  vw: number;
  max: number;
}

export type FontSizeOrClamp = number | Clamp;

export interface IText {
  as?: React.ElementType;
  backgroundColor?: string;
  color?: string;
  className?: string;
  debug?: boolean;
  display?: string;
  fontFamily?: string;
  fontSize?: FontSizeOrClamp | string;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: number;
  linkHoverColor?: string;
  linkVisitedColor?: string;
  maxWidth?: number;
  noLink?: boolean;
  opacity?: number;
  stacked?: boolean;
  textTransform?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  alignSelf?: string;
  variants?: any;
  zIndex?: number;
  children?: any | any[];
  maxLines?: number;
  letterSpacing?: string;
}

const Text = (props: IText) => {
  return <S.Text className={`${props.className} text-builder`} {...props} />;
};

export default Text;
