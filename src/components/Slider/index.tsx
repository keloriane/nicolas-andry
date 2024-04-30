"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slide from "./Slide";
import { Image } from "@/types";
import { urlFor } from "@/lib/imageBuilder";
import Navigation from "../Procedures/Navigation";

interface SliderProps {
  images: [];
  centered?: boolean;
}
const Slider: React.FC<SliderProps> = ({ images, centered = true }) => {
  return images ? (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
        },
        1224: {
          slidesPerView: 4,
        },
        1380: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={27}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Slide image={urlFor(image).url()} />
        </SwiperSlide>
      ))}
      <div className="navigation__container">
        <Navigation />
      </div>
    </Swiper>
  ) : (
    <h2>Loading</h2>
  );
};

export default Slider;
