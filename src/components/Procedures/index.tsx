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

import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import { title } from "process";

const SectionContainer = styled.section`
  padding: 100px 20px;
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.5; /* Reduce opacity for inactive slides */
    transition: opacity 0.3s ease; /* Smooth transition for opacity changes */
  }
  .navigation__container {
    margin-top: 50px;
  }
  h2 {
    text-align: center;
    padding: 50px 0px;
  }
`;
const Procedures = ({
  demarche,
  title,
}: {
  demarche: [{ title: string; description: [] }];
  title: string;
}) => {
  return (
    <SectionContainer>
      <ResponsiveText
        as="h2"
        sizes={["24px", "32px", "47px", "47px"]}
        className={playfare.className}
      >
        {title}
      </ResponsiveText>

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
          <SwiperSlide key={i} className={archivo.className}>
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
