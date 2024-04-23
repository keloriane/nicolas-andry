"use client";
import { urlFor } from "@/lib/imageBuilder";
import { Section } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import Link from "next/link";
import { relative } from "path";

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
    border: 1px solid ${theme.colors.black};
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

const SectionNav = styled.ul`
  li {
    line-height: 30px;

    color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.orange};
    }
  }
`;

const AterlierItem = ({ sections }: { sections: Section[] }) => {
  const sectionScreens = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  useEffect(() => {
    const config = {
      rootMargin: "-1000px 0px -30%",
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
    <GridContainer
      colCount={24}
      rowGap={50}
      style={{ position: "relative", paddingBottom: "200px" }}
    >
      <Col column={[1, 1, 1]} span={[2, 2, 4]}>
        <SectionNav className="list_navigation">
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
        </SectionNav>
      </Col>
      {sections.map((section: Section, index: number) => (
        <Col column={[5, 5, 5, 5]} span={[14, 14, 16, 16]} key={index}>
          <SectionItem
            id={section.slug.current}
            style={{ flexFlow: index % 2 === 0 ? "row-reverse" : "row" }}
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
    </GridContainer>
  );
};

export default AterlierItem;
