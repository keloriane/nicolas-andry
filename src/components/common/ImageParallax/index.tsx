import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Image from "next/image";

type ImageOverlayProps = {
  height: string;
  url: string;
};

type ImageWrapperProps = {
  stiffness?: number;
  $paddingTop: number | number[];
  $height: string;
};

const breakpoints = [1, 420, 640, 768, 1024, 1280, 1440];

const handleResponsiveProps = (
  value: number | number[] | undefined,
  propName: string
) => {
  if (Array.isArray(value)) {
    return value
      .map((v, index) => {
        const breakpoint =
          breakpoints[index] || breakpoints[breakpoints.length - 1];
        const nextBreakpoint = breakpoints[index + 1] || breakpoints[index];
        const calculatedPaddingTop = Array.isArray(value)
          ? value[index]
          : value;
        return `
          ${propName}: ${calculatedPaddingTop}%;
          @media (min-width: ${breakpoint}px) and (max-width: ${nextBreakpoint}px) {
            ${propName}:  ${calculatedPaddingTop}%; /* Adjust as needed */
          }
        `;
      })
      .join(" ");
  } else {
    return `${propName}: ${value}%;`;
  }
};

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  &:before {
    content: "";
    display: block;
    ${(props) => handleResponsiveProps(props.$paddingTop, "padding-top")}
  }
`;

const ImageParallax: React.FC<ImageWrapperProps & ImageOverlayProps> = ({
  height,
  url,
  $paddingTop,
  stiffness = 3,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const moveImage = () => {
      const scrollY = window.scrollY;
      const translateY = (scrollY / 10) * stiffness; // Adjust the factor as needed for the desired parallax effect

      gsap.to(imageRef.current, { y: translateY, ease: "none", duration: 1 });
    };

    moveImage(); // Initial call to set initial position

    window.addEventListener("scroll", moveImage);

    return () => {
      window.removeEventListener("scroll", moveImage);
    };
  }, []);

  return (
    <ImageWrapper $paddingTop={$paddingTop} $height={height}>
      <Image
        src={url}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        ref={imageRef}
        fill
      />
    </ImageWrapper>
  );
};

export default ImageParallax;
