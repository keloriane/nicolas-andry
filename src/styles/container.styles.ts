import styled, { keyframes } from 'styled-components';
import sprite from '@/assets/images/smoke_sprites2.webp';

export const ContainerStyle = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
`;

export const ImageStyle = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1) 0s;
  font-family: 'object-fit: cover;';
  will-change: opacity;
  object-position: 50% 50%;
`;

export const PictureStyle = styled.picture`
  &:before {
    content: '';
    padding-top: 116.38%;
    display: block;
  }
`;

const maskAnimation = keyframes`
    0% {  
      -webkit-mask-position: 0 0; 
       mask-position: 0 0; 
    }
    100% { 
      -webkit-mask-position: 0 100%; 
       mask-position: 0 100%; 
       }
`;

export const TitleMask = styled.h2`
  -webkit-mask-image: url(${sprite.src});
  mask-image: url(${sprite.src});
  -webkit-mask-size: 100% 3600%;
  mask-size: 100% 3600%;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  animation: ${maskAnimation} 1.5s steps(35) 0.2s forwards;
`;
