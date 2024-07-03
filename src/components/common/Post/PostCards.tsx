"use client";
import { playfare } from "@/app/font";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  overflow: hidden;
  cursor: pointer;
  img {
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.05); // Example effect: scale up on hover
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Example effect: add shadow on hover
      transform: scale(1.1);
      transition: all 0.35s ease-in-out;
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
    background-color: rgba(0, 0, 0, 0.5);
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
}: {
  title: string;
  link: string;
  image: string;
}) => {
  return (
    <CardStyle className={playfare.className}>
      <Link href={link}>
        <div className="layer">
          <div className="card-title">{title}</div>
        </div>
        <Image
          src={image}
          alt={""}
          fill
          loading="lazy"
          className={"image_wrapper loaded image_grid_item"}
          placeholder="blur"
          blurDataURL={image + "?w=10&q=10"}
        />
      </Link>
    </CardStyle>
  );
};

export default PostCards;
