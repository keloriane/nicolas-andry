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
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";
import { useFooter } from "@/context/FooterContext";
import { usePathname } from "next/navigation";
import Separator from "../Separator";

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
  locale: string;
  otherTitle: any;
};

const PostImageGrid: React.FC<PostImageGridProps> = ({
  activePost,
  locale,
  otherTitle,
}) => {
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();

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

  const navigation = useFooter();

  const pathSlug = pathname.split("/")[3];

  const navigationCreation = navigation?.navigationData?.filter(
    (nav: any) =>
      nav.categories?.[0]?.title === "Creations" &&
      nav.slug.current !== pathSlug
  );

  const navigationRecherche = navigation?.navigationData?.filter(
    (nav: any) =>
      nav.categories?.[0]?.title === "Recherches" &&
      nav.slug.current !== pathSlug
  );

  const exactPath = pathname.split("/")[2];

  const creationPath = pathname.split("/")[3];

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
            iconClose: () => <span className="yarl__button">fermer</span>,
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
              blurDataURL={img.src}
            />
          </ImageWrapper>
        ))}
      </GridContainerV>

      {activePost?.remerciements && (
        <div
          className="thanks_container"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          <div>
            <h2>Remerciements</h2>
            <div className="rich-text" style={{ fontSize: "16px" }}>
              <PortableText value={activePost.remerciements} />
            </div>
          </div>
        </div>
      )}

      <Separator />
      <section className="navigation_section">
        <div className="title-navigation_container">
          <h2>{otherTitle[0].otherTitle[0].children[0].text}</h2>
        </div>
        <div className="navigation_container">
          <ul>
            {(exactPath === "creations"
              ? navigationCreation
              : navigationRecherche
            )?.map((nav: any, index) => (
              <li key={index}>
                <Link href={`/${locale}/creations/${nav.slug.current}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PostContainer>
  );
};

export default PostImageGrid;
