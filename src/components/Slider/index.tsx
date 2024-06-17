"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slide from "./Slide";
import { urlFor } from "@/lib/imageBuilder";
import Navigation from "../Procedures/Navigation";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageType {
  _id: string;
  asset: {
    _ref: string;
  };
}

interface SliderProps {
  images: ImageType[];
  centered?: boolean;
}

const Slider: React.FC<SliderProps> = ({ images, centered = true }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    event.stopPropagation();
    openLightbox(index);
  };

  const slides: SlideImage[] = images.map((image, index) => ({
    src: urlFor(image).url(),
    alt: `Image ${index + 1}`,
  }));

  return images.length ? (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 1.5,
            slidesPerGroup: 1.5,
          },
          768: {
            slidesPerView: 2.5,
            slidesPerGroup: 2.5,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1224: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1380: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
        spaceBetween={27}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={urlFor(image).url()}
              onClick={(event: any) => handleClick(event, index)}
            />
          </SwiperSlide>
        ))}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={urlFor(image).url()}
              onClick={(event: any) => handleClick(event, index)}
            />
          </SwiperSlide>
        ))}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={urlFor(image).url()}
              onClick={(event: any) => handleClick(event, index)}
            />
          </SwiperSlide>
        ))}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={urlFor(image).url()}
              onClick={(event: any) => handleClick(event, index)}
            />
          </SwiperSlide>
        ))}
        <div className="navigation__container">
          <Navigation />
        </div>
      </Swiper>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{ vignette: true, gap: 10, imageFit: "cover" }}
        styles={{
          container: { backgroundColor: "rgb(1, 22, 26)" },
          thumbnailsContainer: { backgroundColor: "rgb(1, 22, 26)" },
          thumbnail: { background: "rgb(1, 22, 26)" },
        }}
        animation={{ fade: 250, swipe: 0 }}
        render={{
          iconClose: () => <button className="yarl__button">fermer</button>,
        }}
      />
    </>
  ) : (
    <h2>Loading</h2>
  );
};

export default Slider;
