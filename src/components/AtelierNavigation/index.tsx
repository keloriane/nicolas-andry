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

gsap.registerPlugin(ScrollTrigger);

const AtelierNavigation = ({
  atelierItems,
  locale,
}: {
  atelierItems: [{ title: string; slug: { current: string }; image: [] }];
  locale: string;
}) => {
  const [activeSection, setActiveSection] = React.useState<string>(
    atelierItems[0].slug.current
  );

  const pathname = usePathname();

  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageElementRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    if (activeSection !== null) {
      const activeImageIndex = atelierItems.findIndex(
        (atelier) => atelier.slug.current === activeSection
      );

      // Hide other images
      imageRefs.current.forEach((ref, index) => {
        if (index !== activeImageIndex && ref) {
          gsap.to(ref, {
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    }
  }, [activeSection]);

  const handleHoverSection = (slug: string) => {
    setActiveSection(slug);
  };

  return (
    <S.AtelierNavigationSection>
      {atelierItems.map((atelier, index) => (
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
      ))}
    </S.AtelierNavigationSection>
  );
};

export default AtelierNavigation;
