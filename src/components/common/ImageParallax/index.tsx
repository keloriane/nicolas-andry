import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styled from "styled-components";

type ImageParallaxProps = {
  src: string;
  height: string;
};

gsap.registerPlugin(ScrollTrigger);

interface ImageContainerProps {
  height: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  overflow: hidden;
  height: ${(props) => props.height};
`;

interface ParallaxImageProps {
  imageHeightRatio: number;
}

const ParallaxImage = styled.img<ParallaxImageProps>`
  width: 100%;
  position: relative;
  top: ${(props) => `-${props.imageHeightRatio}px`};
  object-fit: contain;
`;

const ImageParallax: React.FC<ImageParallaxProps> = ({ src, height }) => {
  const [imageHeightRatio, setImageHeightRatio] = React.useState(20);
  const imageRef = React.useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const imageSize = image.clientHeight;
    const yOffset = (imageSize / 100) * 30;
    setImageHeightRatio(yOffset);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(image, { y: yOffset, ease: "none" });
    ScrollTrigger.create({
      trigger: image,
      start: "top bottom",
      end: "bottom top",
    });

    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, [imageRef]);

  return (
    <ImageContainer height={height}>
      <ParallaxImage
        ref={imageRef}
        src={src}
        alt="Parallax Image"
        imageHeightRatio={imageHeightRatio}
      />
    </ImageContainer>
  );
};

export default ImageParallax;
