"use client";
import { playfare } from "@/app/font";
import { urlFor } from "@/lib/imageBuilder";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowLeft from "../common/ArrowLeft";
import TransitionLink from "../common/TransitionLink";
import { theme } from "@/styles/theme";

const NavSection = styled.nav<{ isFixed: boolean }>`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 20px;
  margin-top: 40px;
  display: inline-block;
  width: 100%;
  background-color: white;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")};
  top: ${({ isFixed }) => (isFixed ? "27px" : "auto")};
  z-index: ${({ isFixed }) => (isFixed ? "1000" : "auto")};

  ul {
    display: flex;
    gap: 24px;
    li {
      color: ${theme.colors.black};
      &:hover {
        color: ${theme.colors.orange};
      }
    }
  }
`;

const MainSection = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: auto;

  .headline_section {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  @media screen and (max-width: 1208px) {
    max-width: 980px;
  }
  @media screen and (max-width: 768px) {
    max-width: 640px;
  }
`;

const BlockSectionWrapper = styled.section<{
  reversed?: boolean;
  hasimage?: boolean;
}>`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 100px auto;
  gap: 32px;
  align-items: center;
  ul {
    margin-left: 24px;
    list-style: disc;
  }

  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};

  h2 {
    font-size: 26px;
    margin-bottom: 24px;
  }

  .text_container {
    width: ${({ hasimage }) => (hasimage ? "80%" : "100%")};
  }

  @media screen and (max-width: 768px) {
    max-width: 640px;
    ul {
      margin-left: 40px;
    }
  }
`;

const BlockSections = ({
  ateliers,
  title,
}: {
  ateliers: Array<{
    title: string;
    title_content: string;
    content_text: any[];
    blockContent: any[];
    image?: any;
  }>;
  title: string;
}) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <MainSection>
      <section>
        <div className="headline_section">
          <TransitionLink href="/ateliers">
            <ArrowLeft />
          </TransitionLink>
          <h1 style={{ fontSize: "43px" }} className={playfare.className}>
            {title}
          </h1>
        </div>
        <NavSection className="section_nav" isFixed={isFixed}>
          <ul>
            {ateliers.map((section, index) => (
              <li key={section.title || index}>
                <a
                  href={`#${section.title || section.title_content}`}
                  onClick={(e) =>
                    handleNavClick(e, section.title || section.title_content)
                  }
                >
                  {section.title || section.title_content}
                </a>
              </li>
            ))}
          </ul>
        </NavSection>
      </section>
      {ateliers.map((section, index) => (
        <BlockSectionWrapper
          key={section.title || index}
          reversed={index % 2 !== 0}
          hasimage={Boolean(section.image)}
          id={section.title || section.title_content}
        >
          <div className="text_container">
            <h2 className={playfare.className}>
              {section.title || section.title_content}
            </h2>
            <PortableText
              value={
                section.content_text
                  ? section.content_text
                  : section.blockContent
              }
            />
          </div>
          {section.image && (
            <Image
              src={urlFor(section.image).url()}
              width={322}
              height={428}
              alt={section.title || section.title_content}
            />
          )}
        </BlockSectionWrapper>
      ))}
    </MainSection>
  );
};

export default BlockSections;
