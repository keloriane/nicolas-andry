"use client";
import React from "react";

import ProcedureCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";
import Navigation from "./Navigation";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 100px 20px;
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.5; /* Reduce opacity for inactive slides */
    transition: opacity 0.3s ease; /* Smooth transition for opacity changes */
  }
  .navigation__container {
    margin-top: 50px;
  }
`;
const Procedures = ({
  demarche,
}: {
  demarche: [{ title: string; description: [] }];
}) => {
  return (
    <SectionContainer>
      <Swiper
        slidesPerView={1}
        centeredSlides
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={27}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {demarche.map((d, i) => (
          <SwiperSlide key={i}>
            <ProcedureCard title={d.title} text={d.description} />
          </SwiperSlide>
        ))}
        <div className="navigation__container">
          <Navigation />
        </div>
      </Swiper>
    </SectionContainer>
  );
};
export default Procedures;
