"use client";
import { playfare } from "@/app/font";
import { theme } from "@/styles/theme";
import { PostExcerpt } from "@/types/postExcerpt";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface PostgridProps {
  creations: PostExcerpt[];
  locale: string;
  cta: string;
}

const CardGrid = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 150px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
  .info_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
  }
`;

const CardItem = styled.div`
  img {
    transition: all 0.5s ease-in;
  }
  /* &:hover {
    img {
      transition: all 0.5s ease-in;
      transform: scale(1.2);
    }
  } */
  .image_container {
    width: 390px;
    position: relative;
    height: 300px;
    overflow: hidden;

    img:hover {
    }
  }

  .link-post-grid {
    padding: 10px;
    border: 1px solid black;
    font-weight: 100;
    font-size: 16px;
    max-width: 100px;
    margin: auto;
    @media (min-width: 768px) {
      font-size: 19px;
    }
    &:hover {
      border: 1px solid ${theme.colors.orange};
      span {
        color: ${theme.colors.orange} !important;
        transition: all 0.15s ease-in;
      }
      transition: all 0.15s ease-in;
    }
  }

  h2 {
    font-size: 30px;
  }
`;

const PostGridItem: React.FC<PostgridProps> = ({ creations, locale, cta }) => {
  const pathname = usePathname();

  return (
    <CardGrid className="card-grid" id="photo-items">
      {creations.map((post: PostExcerpt, index) => (
        <CardItem key={index}>
          <div className="image_container">
            <Image
              src={post.mainImage.url}
              alt={post.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
              fill
            />
          </div>
          <div className="info_container">
            <div className="title_container">
              <div className="preline"></div>
              <h2 className={playfare.className}>{post.title}</h2>
            </div>
            <Link
              className="link-post-grid"
              href={`${pathname}/${post.slug.current}`}
            >
              <span>{cta}</span>
            </Link>
          </div>
        </CardItem>
      ))}
    </CardGrid>
  );
};

export default PostGridItem;
