"use client";
import React, { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import { urlFor } from "@/lib/imageBuilder";
import { Section } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as S from "./atelier-section.styles";
import ResponsiveText from "../common/ResponsiveText";

gsap.registerPlugin(ScrollTrigger);

const AterlierItem = ({
  sections,
  mainSection,
}: {
  sections: Section[];
  mainSection: any;
}) => {
  const sectionScreens: MutableRefObject<(LegacyRef<HTMLDivElement> | null)[]> =
    useRef<(LegacyRef<HTMLDivElement> | null)[]>([]);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const navWrapper = useRef(null);

  const gridContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger timeline on scroll

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridContainerRef.current!,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Static position of SectionNav when StyledGridContainer is in view
    tl.to(navWrapper.current, {
      position: "fixed",
      // Adjust as needed
      left: 0, // Adjust as needed
      right: 0, // Adjust as needed
      zIndex: 999, // Adjust as needed
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  useEffect(() => {
    const config = {
      rootMargin: "-700px 0px -30%",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, config);

    sectionScreens.current.forEach((sectionScreen: any) => {
      observer.observe(sectionScreen);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div ref={gridContainerRef}>
      <GridContainer colCount={24}>
        <Col column={[1, 1, 1, 1]} span={[5, 5, 5, 5]}>
          <S.SectionNav ref={navWrapper}>
            <div className="nav_wrapper">
              {mainSection.map((s: any, i: number) => (
                <ul key={i}>
                  <p>{s.title}</p>
                  {s.sections.map((section: Section, index: number) => (
                    <li
                      key={index}
                      style={{
                        marginLeft: "20px",
                        color:
                          activeSection === section.slug.current
                            ? theme.colors.orange
                            : theme.colors.black,
                        fontWeight:
                          activeSection === section.slug.current ? 600 : 400,
                      }}
                      onClick={() => scrollToSection(section.slug.current)}
                    >
                      {section.title}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </S.SectionNav>
        </Col>

        <Col column={[1, 1, 1, 6, 6]} span={[23, 23, 23, 17, 17]}>
          {mainSection.map((s: any, index: number) => (
            <div key={index} style={{ marginTop: "80px" }}>
              <div
                className="title_container"
                style={{ marginBottom: "100px" }}
              >
                <ResponsiveText
                  sizes={["18px", "24px", "37px"]}
                  className={playfare.className}
                  as="h2"
                >
                  {s.title}
                </ResponsiveText>
              </div>

              {s.sections.map((section: Section, index: number) => (
                <Col column={[2, 2, 5, 5]} span={[22, 22, 16, 16]} key={index}>
                  <S.SectionItem
                    ref={(el: any) => (sectionScreens.current[index] = el)}
                    id={section.slug.current}
                    style={{
                      flexFlow:
                        index % 2 === 0 ? "row-reverse wrap" : "row wrap",
                    }}
                  >
                    <div className="text_container">
                      {section.title ? (
                        <ResponsiveText
                          sizes={["18px", "24px", "37px"]}
                          className={playfare.className}
                          as="h2"
                        >
                          {section.title}
                        </ResponsiveText>
                      ) : (
                        ""
                      )}

                      <div className="text_wrapper rich-text">
                        <PortableText value={section.content} />
                      </div>
                    </div>
                    {section.image ? (
                      <div className="image_container">
                        <Image
                          src={urlFor(section.image).url()}
                          alt=""
                          width={340}
                          height={410}
                          style={{ objectFit: "cover" }}
                          className="atelier_image_item"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </S.SectionItem>
                </Col>
              ))}
            </div>
          ))}
        </Col>
      </GridContainer>
    </div>
  );
};

export default AterlierItem;
