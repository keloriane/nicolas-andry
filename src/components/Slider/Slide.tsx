import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "@/lib/imageBuilder";

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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={"image-slide"}
        />
      }
    </SlideContainer>
  );
};
export default Slide;
