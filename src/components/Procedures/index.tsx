"use client";
import React from "react";

import ProcedureCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";
import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import Button from "../common/Button";

const SectionContainer = styled.section`
  padding: 100px 20px;
  display: flex;
  align-items: center;

  .section-wrapper {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    @media screen and (max-width: 840px) {
      flex-direction: column;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    gap: 24px;
  }
  .swiper-container {
    flex: 3;
    @media screen and (max-width: 840px) {
      display: none;
    }
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
}: {
  demarche: [{ title: string; description: [] }];
  title: string;
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
          <Button text="En savoir plus" href="/about" />
        </div>

        <Swiper
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          spaceBetween={27}
          className="swiper-container"
        >
          {demarche.map((d, i) => (
            <SwiperSlide key={i} className={archivo.className}>
              <ProcedureCard title={d.title} text={d.description} />
            </SwiperSlide>
          ))}
          {/* <div className="navigation__container">
          <Navigation />
        </div> */}
        </Swiper>
      </div>
    </SectionContainer>
  );
};
export default Procedures;
