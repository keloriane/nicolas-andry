"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slide from "./Slide";
import { Image } from "@/types";

interface SliderProps {
  images: Image[];
}
const Slider: React.FC<SliderProps> = ({ images }) => {
  return images ? (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1224: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      spaceBetween={27}
      freeMode={true}
      loop={true}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Slide image={image.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <h2>Loading</h2>
  );
};

export default Slider;
