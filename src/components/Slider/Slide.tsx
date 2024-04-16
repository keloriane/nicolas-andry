import React from "react";
import Image from "next/image";
import styled from "styled-components";

const SlideContainer = styled.div`
  width: 300px;
  height: 410px;
  position: relative;
`;

const Slide = ({ image }: { image: string }) => {
  return (
    <SlideContainer>
      {
        <Image
          src={image}
          alt={"alt"}
          fill
          className={"image-slide"}
          sizes="200px"
        />
      }
    </SlideContainer>
  );
};
export default Slide;
