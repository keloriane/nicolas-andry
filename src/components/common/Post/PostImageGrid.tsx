"use client";
import React, { useLayoutEffect, useMemo, useState } from "react";
import {
  GridContainerV,
  ImageWrapper,
  PostContainer,
} from "./post-grid.styles";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { gsap } from "gsap";
import Image from "next/image";
import { PortableText } from "next-sanity";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type ImageType = {
  url: string;
  alt: string;
  metadata: any;
};

type PostType = {
  images: ImageType[];
  remerciements?: [];
};

type PostImageGridProps = {
  activePost: PostType | null;
};

const PostImageGrid: React.FC<PostImageGridProps> = ({ activePost }) => {
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (activePost) {
      gsap.fromTo(
        [".image_grid_item"],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.04 }
      );
    }
  }, [activePost]);

  const formattedImages = useMemo(() => {
    return (
      activePost?.images.map((image, index) => ({
        props: image.metadata,
        index: index,
        src: image.url,
        alt: image.alt,
      })) || []
    );
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
          carousel={{ preload: formattedImages.length }}
          slides={formattedImages}
          plugins={[Thumbnails]}
          thumbnails={{
            vignette: true,
            imageFit: "cover",
          }}
        />

        {formattedImages.map((img, index) => (
          <ImageWrapper key={index}>
            <Image
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 47vw, (max-width: 1279px) 28vw, 350px"
              alt={img.alt || ""}
              src={img.src}
              onClick={() => onImageClick(index)}
              width={500}
              height={620}
              loading="lazy"
              className={loading ? "" : "image_wrapper loaded image_grid_item"}
              placeholder="blur"
              blurDataURL={img.src + "?blur=50"}
            />
          </ImageWrapper>
        ))}
      </GridContainerV>
      {activePost?.remerciements ? (
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ marginBottom: "20px" }}>Remerciement</h2>
          <div style={{ marginLeft: "40px" }} className="rich-text">
            <PortableText value={activePost ? activePost.remerciements : []} />
          </div>
        </div>
      ) : (
        ""
      )}
    </PostContainer>
  );
};
export default PostImageGrid;
