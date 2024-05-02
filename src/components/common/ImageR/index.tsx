'use client';
import React from 'react';
import * as S from './image.style';
import { ImageRProps } from './image.style';

const ImageR: React.FC<ImageRProps> = ({
  height = 100,
  reactRef,
  src,
  opacity,
}) => {
  return (
    <S.ContainerStyle>
      <S.PictureStyle src={src} height={height}>
        <S.ImageStyle src={src} ref={reactRef} opacity={opacity} />
      </S.PictureStyle>
    </S.ContainerStyle>
  );
};

export default ImageR;
