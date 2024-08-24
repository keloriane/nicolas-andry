"use client";
import React from "react";

import ProcedureCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";
import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import Button from "../common/Button";
import Navigation from "./Navigation";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const SectionContainer = styled.section`
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .slider_container {
    margin-top: 24px;
  }
  .section-wrapper {
    width: 100%;
    margin: auto;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 640px;
    margin: auto;
    text-align: center;
    margin-top: 24px;
    h2 {
      margin: auto;
      margin-top: 24px;
    }

    gap: 24px;
  }

  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.5; /* Reduce opacity for inactive slides */
    transition: opacity 0.3s ease; /* Smooth transition for opacity changes */
  }
  .navigation__container {
    margin-top: 50px;
  }
  h2 {
    text-align: center;
  }
`;
const Procedures = ({
  demarche,
  title,
  homePage = false,
  locale,
}: {
  demarche: [{ title: string; description: [] }];
  title: string;
  homePage?: boolean;
  locale: string;
}) => {
  return (
    <SectionContainer>
      <div className="section-wrapper">
        <div className="text-container">
          <ResponsiveText
            as="h2"
            sizes={["24px", "32px", "47px", "47px"]}
            className={playfare.className}
          >
            {title}
          </ResponsiveText>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            eligendi fugit autem velit accusamus, officia ratione, beatae culpa
            dicta temporibus voluptatum rem? Tempore dolorem praesentium quam
            est nihil esse sit.
          </p>

          {homePage ? (
            <Button text="En savoir plus" href={`${locale}/about`} />
          ) : (
            ""
          )}
        </div>

        <div className="slider_container">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 27,
              },
            }}
            loop
            centeredSlides
            spaceBetween={27}
            className="swiper-container"
          >
            {demarche.map((d, i) => (
              <SwiperSlide key={i} className={archivo.className}>
                <ProcedureCard title={d.title} text={d.description} />
              </SwiperSlide>
            ))}
            {demarche.map((d, i) => (
              <SwiperSlide key={i + 1} className={archivo.className}>
                <ProcedureCard title={d.title} text={d.description} />
              </SwiperSlide>
            ))}

            <div className="navigation__container">
              <Navigation />
            </div>
          </Swiper>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Procedures;
