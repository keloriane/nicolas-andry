import React from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

interface SlideButtonProps {
  buttonText: string;
}

const ArrowNav = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 46px;
  height: 46px;
  &:hover {
    background-color: black;
    svg {
      path {
        fill: white;
      }
    }
  }
`;
export function SlideNextButton({ buttonText }: SlideButtonProps) {
  const swiper = useSwiper();

  const handleNextSlide = () => {
    swiper.slidePrev();
  };

  return (
    <ArrowNav onClick={handleNextSlide}>
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.959723 7.2094C0.569199 7.59992 0.569199 8.23308 0.959722 8.62361L7.32368 14.9876C7.71421 15.3781 8.34737 15.3781 8.7379 14.9876C9.12842 14.597 9.12842 13.9639 8.7379 13.5734L3.08104 7.9165L8.7379 2.25965C9.12842 1.86912 9.12842 1.23596 8.7379 0.845435C8.34737 0.454911 7.71421 0.45491 7.32369 0.845435L0.959723 7.2094ZM22.0835 6.9165L1.66683 6.9165L1.66683 8.9165L22.0835 8.9165L22.0835 6.9165Z"
          fill="black"
        />
      </svg>
    </ArrowNav>
  );
}

export function SlidePrevButton({ buttonText }: SlideButtonProps) {
  const swiper = useSwiper();

  const handlePrevSlide = () => {
    swiper.slideNext();
  };

  return (
    <ArrowNav onClick={handlePrevSlide} className="arrow-next">
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7908 8.62361C22.1813 8.23309 22.1813 7.59992 21.7908 7.2094L15.4268 0.845436C15.0363 0.454912 14.4031 0.454912 14.0126 0.845436C13.6221 1.23596 13.6221 1.86913 14.0126 2.25965L19.6694 7.9165L14.0126 13.5734C13.6221 13.9639 13.6221 14.597 14.0126 14.9876C14.4031 15.3781 15.0363 15.3781 15.4268 14.9876L21.7908 8.62361ZM0.666992 8.9165L21.0837 8.9165V6.9165L0.666992 6.9165L0.666992 8.9165Z"
          fill="black"
        />
      </svg>
    </ArrowNav>
  );
}

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Navigation() {
  return (
    <NavigationContainer>
      <SlideNextButton buttonText="Next" />
      <SlidePrevButton buttonText="Previous" />
    </NavigationContainer>
  );
}
