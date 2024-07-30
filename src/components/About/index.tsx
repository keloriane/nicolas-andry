"use client";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import ResponsiveText from "../common/ResponsiveText";
import { archivo, playfare } from "@/app/font";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import { theme } from "@/styles/theme";
import { CTA } from "../common/Button/cta";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import * as S from "./about.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({
  imageProfile,
  presentationTitle,
  presentationText,
}: {
  imageProfile: string;
  presentationTitle: string;
  presentationText: TypedObject | TypedObject[];
}) => {
  const aboutWrapper = useRef<HTMLDivElement>(null);

  const paragraphRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mainTitle = new SplitType("h2.about_title", {
      types: "words",
    });
    if (paragraphRef.current && imageRef.current && aboutWrapper.current) {
      const mainTitle = new SplitType("h2.about_title", {
        types: "words",
      });

      const aboutText = new SplitType(
        paragraphRef.current.children as HTMLCollectionOf<HTMLElement>,
        {
          types: "lines",
        }
      );

      gsap.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutWrapper.current,
          start: "top 20%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          markers: true,
        },
      });

      gsap.fromTo(
        aboutText.lines,
        {
          y: 100,
        },
        {
          y: 0,

          stagger: 0.05,
          duration: 0.5,
          scrollTrigger: {
            trigger: aboutWrapper.current,
            start: "top 20%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            markers: true,
          },
        }
      );
    }
  });

  return (
    <S.AboutWrapper ref={aboutWrapper}>
      <GridContainer
        colCount={24}
        colGap={24}
        rowGap={24}
        className="about-grid"
      >
        <Col column={[3, 3, 3, 3, 3]} span={[20, 20, 20, 9, 9]}>
          <div className="text_container">
            <div className="name_wrapper">
              <div className="preline"></div>
              <h3 className={`${playfare.className} `}>Nicolas Andry</h3>
            </div>
            <ResponsiveText
              sizes={["20px", "24px", "45px"]}
              as="h2"
              className={`${playfare.className} about_title `}
            >
              {/* {presentationTitle} */}À propos de moi
            </ResponsiveText>

            <div className={archivo.className}>
              <div className="rich-text" ref={paragraphRef}>
                <PortableText value={presentationText} />
              </div>
            </div>
            <div className="cta_container">
              <CTA href="/a-propos">En savoir plus</CTA>
            </div>
          </div>
        </Col>

        <Col column={[3, 3, 3, 15, 15, 15]} span={[20, 20, 18, 9, 9, 7]}>
          <div className="image_container">
            <div className="profile_pic" ref={imageRef}>
              <Image
                src={urlFor(imageProfile).url()}
                alt={"post.title"}
                width={381}
                height={477}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </Col>
      </GridContainer>
    </S.AboutWrapper>
  );
};

export default AboutSection;
