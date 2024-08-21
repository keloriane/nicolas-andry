"use client";
import React, { useEffect, useRef } from "react";

import { PostExcerpt, PostsExcerpt } from "@/types/postExcerpt";

import Image from "next/image";

import TransitionLink from "../common/TransitionLink";
import * as S from "./postgrid.styles";
import gsap from "gsap";

import { block } from "million/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PostgridProps {
  creations: PostExcerpt[];
  locale: string;
}

const Postgrid: React.FC<PostgridProps> = ({ creations, locale }) => {
  const layerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const textContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pathname = usePathname();

  const handleMouseEnter = (index: number) => {
    const layer = layerRefs.current[index];
    if (layer) {
      const h2 = layer.querySelector("h2");
      const p = layer.querySelector("p");
      gsap.to(layer, {
        duration: 0.5,
        bottom: "0%",
        ease: "power2.out",
      });
      gsap.fromTo(
        h2,
        { y: "-10%", opacity: 0, duration: 0.5, delay: 0.1 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2 }
      );
      gsap.fromTo(
        p,
        { y: "-10%", opacity: 0, duration: 0.5, delay: 0.1 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2 }
      );
    }
  };
  const handleMouseLeave = (index: number) => {
    const layer = layerRefs.current[index];
    if (layer) {
      const h2 = layer.querySelector("h2");
      const p = layer.querySelector("p");

      gsap.to(layer, {
        duration: 0.5,
        bottom: "-35%",
        ease: "power2.out",
      });
    }
  };

  return (
    <S.PostGrid id={"creations"}>
      {creations.map((post: PostExcerpt, index) => (
        <div
          key={post.slug.current}
          className={`card card-${index + 1}`}
          style={{ position: "relative" }} // Ensure position is relative here
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Link replace href={`${pathname}/${post.slug.current}`}>
            <Image
              src={post.mainImage.url}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute", // Keep position absolute here
              }}
              fill
            />
            <div
              className="layer"
              ref={(el) => {
                layerRefs.current[index] = el;
              }}
            >
              <div
                className="text_container"
                ref={(el) => {
                  textContainerRefs.current[index] = el;
                }}
              >
                <div className="title_container">
                  <div className="preline"></div>
                  <h2>{post.title}</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  quibusdam excepturi autem, tenetur reprehenderit totam, esse,
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </S.PostGrid>
  );
};

export default Postgrid;
