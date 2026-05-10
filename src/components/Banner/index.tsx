import Image, { StaticImageData } from "next/image";
import React from "react";

const wrapperStyle: React.CSSProperties = {
  maxWidth: "100%",
  display: "flex",
  justifyContent: "flex-end",
  overflow: "hidden",
  paddingBottom: 100,
};

const Banner = ({
  src,
  width,
  height,
  alt = "banner image",
}: {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt?: string;
}) => (
  <div>
    <div style={wrapperStyle}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 90vw, 1120px"
        style={{ objectFit: "cover", width: "90%", height: "auto" }}
      />
    </div>
  </div>
);

export default Banner;
