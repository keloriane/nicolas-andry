"use client";
import { playfare } from "@/app/font";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import TransitionLink from "../TransitionLink";

const CardStyle = styled.div`
  position: relative;
  height: 320px;
  width: 400px;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.2);

      transition: all 0.25s ease-in;
    }
    .layer {
      transition: all 0.25s ease-in;
    }
  }
  .card-title {
    color: white;
    z-index: 2;
    text-transform: uppercase;
  }
  .layer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    img {
      object-fit: cover;
    }
  }
`;

const PostCards = ({
  title,
  link,
  image,
  className,
}: {
  title: string;
  link: string;
  image: string;
  className?: string;
}) => {
  return (
    <CardStyle className={className}>
      <TransitionLink href={link} className={playfare.className}>
        <div className="layer">
          <div className="preline"></div>
          <div className="card-title">{title}</div>
        </div>
        <Image
          src={image}
          alt={""}
          loading="lazy"
          className={"image_wrapper loaded image_grid_item"}
          placeholder="blur"
          blurDataURL={image + "?w=10&q=10"}
          sizes="(max-width: 768px) 310px, 400px"
          fill
        />
      </TransitionLink>
    </CardStyle>
  );
};

export default PostCards;
