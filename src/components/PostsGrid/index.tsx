"use client";
import React, { useMemo, useRef } from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const LayerCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 1px;
  background: rgb(42, 24, 18);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  background: linear-gradient(0deg, #121c2a 0%, rgba(0, 212, 255, 0) 100%);
  z-index: 2;
  color: white;
  text-align: center;
  h3 {
    font-size: 30px;
  }
`;

const CardWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 19px;
  }
  a {
    font-size: 19px;
  }

  .link-post-grid {
    padding: 10px;
    border: 1px solid white;
    font-weight: 100;
    &:hover {
      border: 1px solid ${theme.colors.orange};
      span {
        color: ${theme.colors.orange} !important;
        transition: all 0.15s ease-in;
      }
      transition: all 0.15s ease-in;
    }
  }
`;

const PostGridContainer = styled.section`
  margin-top: 380px;
  padding-top: 80px;
  .image-grid-item {
    width: 100%;
    height: 600px;
  }

  @media screen and (max-width: 1100px) {
    .image-grid-item {
      height: 400px;
    }
  }
  @media screen and (max-width: 640px) {
    .image-grid-item {
      height: 424px;
      max-width: 315px;
      margin: auto;
    }
  }
  .mask-anim {
    overflow: hidden;
    background: transparent;

    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    object-fit: cover;
  }
`;

const PostsGrid = ({
  playfare,
  archivo,
  posts,
  locale,
}: {
  playfare: string;
  archivo: string;
  locale: string;

  posts: [{ image: string; title: string; description: []; slug: string }];
}) => {
  const builder = useMemo(() => imageUrlBuilder(client), []);
  const urlFor = useMemo(
    () => (source: string) => builder.image(source),
    [builder]
  );

  const maskContainers = useRef<HTMLDivElement[]>([]);

  useGSAP((context) => {
    maskContainers.current.forEach((el, index) => {
      gsap.set(el.querySelector(".maskImage"), { scale: 1.4 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 30%",
          end: "bottom 40%",
          toggleActions: "play none none none",
        },
      });

      gsap.set(".maskImage", { scale: 1.4 });
      tl.to(
        maskContainers.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 2,
          stagger: 0.15,
          ease: "expo.out",
        },
        0
      ).to(
        ".maskImage",
        {
          scale: 1,
          duration: 1.8,
          stagger: 0.15,
          ease: "expo.out",
        },
        0
      );
    });
  });
  return (
    <PostGridContainer id="post-navigation">
      <GridContainer
        colCount={24}
        colGap={20}
        rowGap={20}
        style={{ padding: "0 20px", maxWidth: "1280px", margin: "100px auto" }}
      >
        {posts.map((post, index: number) => (
          <Col
            className={`image-grid-item item-${index} mask-anim`}
            key={index}
            reactRef={(el: any) => {
              if (el) maskContainers.current[index] = el;
            }}
            column={
              index === 0
                ? [1, 1, 1, 1]
                : index === 1
                  ? [1, 1, 9, 9]
                  : [1, 1, 17, 17]
            }
            span={[24, 24, 8, 8]}
          >
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
              fill
              priority={index < 3}
              loading={index < 3 ? "eager" : "lazy"}
              className="maskImage"
            />
            <LayerCard>
              <CardWrapper className="rich-text">
                <h3 className={playfare}>{post.title}</h3>
                <div className={archivo}>
                  <PortableText value={post.description} />
                </div>
                <Link
                  className={"link-post-grid"}
                  href={`${locale}/${post.slug}`}
                >
                  <span style={{ color: "white" }} className={archivo}>
                    Découvrir
                  </span>
                </Link>
              </CardWrapper>
            </LayerCard>
          </Col>
        ))}
      </GridContainer>
    </PostGridContainer>
  );
};

export default PostsGrid;
