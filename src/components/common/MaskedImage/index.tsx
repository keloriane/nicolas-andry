import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Mask = styled.div`
  overflow: hidden;
  background: transparent;
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  object-fit: cover;
`;

interface MaskedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  lazy: boolean;
  index: number;
}

const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes,
  lazy,
  index,
}) => {
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = maskRef.current;

    if (el) {
      const maskImage = el.querySelector<HTMLImageElement>(".maskImage");

      if (maskImage) {
        gsap.set(maskImage, { scale: 1.4 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          })
          .to(el, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "expo.out",
          })
          .to(
            maskImage,
            {
              scale: 1,
              duration: 1.8,
              ease: "expo.out",
            },
            0
          );
      }
    }
  }, []);

  return (
    <Mask ref={maskRef}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={lazy ? "lazy" : "eager"}
        className="maskImage"
      />
    </Mask>
  );
};

export default React.memo(MaskedImage);
