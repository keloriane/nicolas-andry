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
  .card-title {
    color: white;
    z-index: 2;
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
        <Image src={image} alt={""} fill />
      </Link>
    </CardStyle>
  );
};

export default PostCards;
