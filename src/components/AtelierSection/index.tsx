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
import { hrtime } from "process";

gsap.registerPlugin(ScrollTrigger);

const SectionItem = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .text_container {
    flex: 2;
    ul {
      margin-left: 20px;
    }
  }
  .text_wrapper {
    margin-left: 20px;
  }

  .image_container {
    padding: 20px;

    flex: 1;
  }

  height: 100%;
  align-items: center;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  li {
    list-style: disc;
  }

  p,
  li {
    line-height: 30px;
  }
`;

const SectionNav = styled.div`
  position: absolute;
  top: 85px;
  li {
    line-height: 30px;
    color: ${theme.colors.black};
    &:hover {
      color: ${theme.colors.orange};
    }
  }
`;

const StyledGridContainer = styled(GridContainer)`
  position: relative;
  padding-bottom: 200px;
  overflow-y: scroll;
`;

const AterlierItem = ({ sections }: { sections: Section[] }) => {
  const sectionScreens: MutableRefObject<(LegacyRef<HTMLDivElement> | null)[]> = useRef<(LegacyRef<HTMLDivElement> | null)[]>([]);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const navWrapper = useRef(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger timeline on scroll
    console.log(gridContainerRef.current);
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
      section.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  return (
    <div ref={gridContainerRef}>
      <StyledGridContainer colCount={24} rowGap={50}>
        {/* <StyledCol column={[5, 5, 5, 5]} span={[14, 14, 16, 16]}> */}
        <SectionNav ref={navWrapper}>
          <div className="nav_wrapper">
            <ul>
              {sections.map((section: Section, index) => (
                <li
                  key={index}
                  style={
                    activeSection === section.slug.current
                      ? { color: theme.colors.orange, fontWeight: 600 }
                      : { color: theme.colors.black, fontWeight: 400 }
                  }
                  onClick={() => scrollToSection(section.slug.current)}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </div>
        </SectionNav>

        {sections.map((section: Section, index: number) => (
          <Col column={[5, 5, 5, 5]} span={[14, 14, 16, 16]} key={index}>
            <SectionItem
              ref={(el:any) => (sectionScreens.current[index] = el)}
              id={section.slug.current}
              style={{
                flexFlow: index % 2 === 0 ? "row-reverse wrap" : "row wrap",
              }}
             
            >
              <div className="text_container">
                <h2 className={playfare.className}>{section.title}</h2>
                <div className="text_wrapper">
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
                  />
                </div>
              ) : (
                ""
              )}
            </SectionItem>
          </Col>
        ))}
      </StyledGridContainer>
    </div>
  );
};

export default AterlierItem;