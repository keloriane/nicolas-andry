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
const Procedures = () => {
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
        <SwiperSlide>
          <ProcedureCard
            text="Interrogations concrètes sur la faisabilité d'une photographierespectueuse de la santé et de la vie sous toutes ses formes, et ce autantpendant la pratique qu'en amont et en aval de celle-ci.
 Déconstructions théoriques et pratiques des habitudes, a priori,certitudes,… 
en vue de trouver le recul nécessaire pour bâtir (parfois)d'autres possibles.
Réappropriation progressive, active, et collective des savoirs et dessavoirs-faire. (Re)création de ponts entre sciences et arts, photographie etcinéma, passionnées et professionnelles, etc."
            title="Démarches recherches techniques"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProcedureCard
            text="Interrogations concrètes sur la faisabilité d'une photographierespectueuse de la santé et de la vie sous toutes ses formes, et ce autantpendant la pratique qu'en amont et en aval de celle-ci.
Réappropriation progressive, active, et collective des savoirs et dessavoirs-faire. (Re)création de ponts entre sciences et arts, photographie etcinéma, passionnées et professionnelles, etc."
            title="Démarches recherches techniques"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProcedureCard
            text="Interrogations concrètes sur la faisabilité d'une photographierespectueuse de la santé et de la vie sous toutes ses formes, et ce autantpendant la pratique qu'en amont et en aval de celle-ci.
 Déconstructions théoriques et pratiques des habitudes, a priori,certitudes,… 
en vue de trouver le recul nécessaire pour bâtir (parfois)d'autres possibles.
Réappropriation progressive, active, et collective des savoirs et dessavoirs-faire. (Re)création de ponts entre sciences et arts, photographie etcinéma, passionnées et professionnelles, etc."
            title="Démarches recherches techniques"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProcedureCard
            text="Interrogations concrètes sur la faisabilité d'une photographierespectueuse de la santé et de la vie sous toutes ses formes, et ce autantpendant la pratique qu'en amont et en aval de celle-ci.
 Déconstructions théoriques et pratiques des habitudes, a priori,certitudes,… 
en vue de trouver le recul nécessaire pour bâtir (parfois)d'autres possibles.
Réappropriation progressive, active, et collective des savoirs et dessavoirs-faire. (Re)création de ponts entre sciences et arts, photographie etcinéma, passionnées et professionnelles, etc."
            title="Démarches recherches techniques"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProcedureCard
            text="Interrogations concrètes sur la faisabilité d'une photographierespectueuse de la santé et de la vie sous toutes ses formes, et ce autantpendant la pratique qu'en amont et en aval de celle-ci.
 Déconstructions théoriques et pratiques des habitudes, a priori,certitudes,… 
en vue de trouver le recul nécessaire pour bâtir (parfois)d'autres possibles.
Réappropriation progressive, active, et collective des savoirs et dessavoirs-faire. (Re)création de ponts entre sciences et arts, photographie etcinéma, passionnées et professionnelles, etc."
            title="Démarches recherches techniques"
          />
        </SwiperSlide>

        <div className="navigation__container">
          <Navigation />
        </div>
      </Swiper>
    </SectionContainer>
  );
};
export default Procedures;
