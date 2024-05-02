import styled from 'styled-components';

export type ImageRProps = {
  height?: number;
  reactRef?: React.RefObject<HTMLImageElement>;
  src: string;
  opacity?: number;
};

export const ContainerStyle = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
`;

export const ImageStyle = styled.img<ImageRProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity};
  position: absolute;
  object-fit: cover;
  transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1) 0s;
  font-family: 'object-fit: cover;';
  will-change: opacity;
  object-position: 50% 50%;
`;

export const PictureStyle = styled.picture<ImageRProps>`
  &:before {
    content: '';
    padding-top: ${props => props.height}%;
    display: block;
  }
`;
