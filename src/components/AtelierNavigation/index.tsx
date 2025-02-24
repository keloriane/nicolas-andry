"use client";
import React, { useEffect, useRef } from "react";
import * as S from "./atelierNavigation.styles";
import Image from "next/image";
import { playfare } from "@/app/font";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { urlFor } from "@/lib/imageBuilder";
import { usePathname } from "next/navigation";
import { PortableText } from "next-sanity";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

const AtelierNavigation = ({
  atelierItems,
  locale,
}: {
  atelierItems: [
    {
      title: string;
      slug: { current: string };
      image: [];
      introductionText: [];
    },
  ];
  locale: string;
}) => {
  const pathname = usePathname();

  return (
    <S.AtelierNavigationSection>
      {/* {atelierItems.map((atelier, index) => (
        <div className="atelier_wrapper" key={index}>
          <div className="title_container">
            <div>
              <Link
                replace
                href={`${pathname}/${atelier.slug.current}`}
                onMouseEnter={() => handleHoverSection(atelier.slug.current)}
                className={playfare.className}
                style={
                  activeSection === atelier.slug.current
                    ? { color: "#FFA500" }
                    : { color: "#000000" }
                }
              >
                {atelier.title}
              </Link>
              <div className="introductionText">
                <PortableText value={atelier.introductionText} />
              </div>
            </div>
            <hr />
          </div>
          <div
            className="image_container"
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            style={{
              opacity: activeSection === atelier.slug.current ? 1 : 0,
              transition: "opacity 0.5s ease-out",
            }}
          >
            <Image
              width={327}
              height={440}
              src={urlFor(atelier.image).url()}
              alt={atelier.title}
              ref={(el) => {
                imageElementRefs.current[index] = el;
              }}
            />
          </div>
        </div>
      ))} */}
      {atelierItems.map((atelier, i) => (
        <div className="atelier_item" key={i}>
          <Image
            width={327}
            height={440}
            src={urlFor(atelier.image).url()}
            alt={atelier.title}
          />
          <h4>{atelier.title}</h4>
          <Button
            text={"Découvrir"}
            href={`${pathname}/${atelier.slug.current}`}
          />
        </div>
      ))}
    </S.AtelierNavigationSection>
  );
};

export default AtelierNavigation;
