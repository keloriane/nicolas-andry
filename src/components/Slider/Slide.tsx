import React from "react";
import Image from "next/image";
import styled from "styled-components";

const SlideContainer = styled.div`
  width: 300px;
  height: 340px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    transition: all 0.3s ease-in;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

interface SlideProps {
  image: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Slide: React.FC<SlideProps> = ({ image, onClick }) => (
  <SlideContainer onClick={onClick}>
    <Image
      src={image}
      alt="Slide image"
      fill
      style={{ objectFit: "cover" }}
      className="image-slide"
    />
  </SlideContainer>
);

export default Slide;
