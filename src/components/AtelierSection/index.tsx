"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { urlFor } from "@/lib/imageBuilder";
import { Section } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import Link from "next/link";

const SectionItem = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .text_container {
    flex: 2;
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

const SectionNavWrapper = styled.div`
  position: sticky; /* Ensure the parent has relative positioning */
`;

const SectionNav = styled.div`
  position: fixed;
  margin-top: 20%;

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
`;

const AterlierItem = ({ sections }: { sections: Section[] }) => {
  const sectionScreens = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const navWrapper = useRef(null);

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
    <StyledGridContainer colCount={24} rowGap={50}>
      <Col column={1} span={4}>
        <SectionNav>
          <div className="nav_wrapper" ref={navWrapper}>
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
      </Col>
      {sections.map((section: Section, index: number) => (
        <Col column={[5, 5, 5, 5]} span={[14, 14, 16, 16]} key={index}>
          <SectionItem
            id={section.slug.current}
            style={{
              flexFlow: index % 2 === 0 ? "row-reverse wrap" : "row wrap",
            }}
            ref={(el) => (sectionScreens.current[index] = el)}
          >
            <div className="text_container">
              <h2 className={playfare.className}>{section.title}</h2>
              <PortableText value={section.content} />
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
  );
};

export default AterlierItem;
