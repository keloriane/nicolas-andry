"use client";
import React, { useLayoutEffect, useMemo, useState } from "react";
import GridContainer from "../Container";
import styled from "styled-components";
import {
  GridContainerV,
  ImageWrapper,
  LoadingWrapper,
  PostContainer,
} from "./post-grid.styles";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Col from "../Col";
import { PortableText } from "next-sanity";
import { PostDataType } from "@/types";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { gsap } from "gsap";

const PostImageGrid = ({ activePost }: { activePost: any }) => {
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (activePost) {
      gsap.fromTo(
        [".text_header_wrapper", ".image_header_wrapper", ".image_grid_item"],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.04 }
      );
    }
  }, [activePost]);

  const formattedImages = useMemo(() => {
    return activePost?.images
      ? activePost.images.map((image: any, index: number) => ({
          props: image.metadata,
          index: index,
          src: image.url,
          alt: image.alt,
        }))
      : [];
  }, [activePost?.images]);

  const onImageClick = (index: number) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <PostContainer>
      <GridContainerV>
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          styles={{
            container: { backgroundColor: "rgb(1, 22, 26)" },
            thumbnailsContainer: { backgroundColor: "rgb(1, 22, 26)" },
            thumbnail: { background: "rgb(1, 22, 26)" },
          }}
          animation={{ fade: 250, swipe: 0 }}
          render={{
            iconClose: () => <button className="yarl__button">fermer</button>,
          }}
          slides={formattedImages}
          plugins={[Thumbnails]}
          thumbnails={{ vignette: true, gap: 10, imageFit: "cover" }}
        />
        {formattedImages.map((img: any, index: number) => (
          <ImageWrapper key={index}>
            <Image
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              sizes="(max-width: 800px) 100vw, 800px"
              alt={img.alt || ""}
              src={img.src}
              onClick={() => onImageClick(index)}
              width={500}
              height={620}
              loading="lazy"
              className={loading ? "" : "image_wrapper loaded image_grid_item"}
              placeholder="blur"
              blurDataURL={img.src + "?w=10&q=10"} // Assuming images are served by a CDN that supports query params for low-res versions
            />
          </ImageWrapper>
        ))}
      </GridContainerV>
    </PostContainer>
  );
};

export default PostImageGrid;
