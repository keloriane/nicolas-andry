"use client";
import React, { useEffect, useState, useCallback } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import GridContainer from "../Container";
import Col from "../Col";
import * as S from "./post-content.styles";
import PhotoAlbum, { Photo } from "react-photo-album";
import styled from "styled-components";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

interface Post {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string; metadata: any }];
}

interface PostContentProps {
  postsTitle: { title: string; slug: { current: string } }[];
}

const ImageGridContainer = styled.div`
  border-top: 1px solid ${theme.colors.black};
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 99%;
  margin: auto;
  .col_image_item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .img-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
  }

  .react-photo-album {
    max-width: 1280px;
    margin: auto;
    width: 100%;

    img {
      object-fit: cover;
    }
  }
`;

const PostContent: React.FC<PostContentProps> = ({ postsTitle }) => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>("ten-weingaert-2022");
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);

  const getActivePost = useCallback(async (slug: string) => {
    try {
      const post: Post[] = await client.fetch(
        groq`
          *[_type == "post" && slug.current == $slug]{
            title,
            categories,
            content,
            'images': images[]{
              "url": asset->url,
              "alt": asset->alt,
              "metadata": asset->ref
            }
          }
        `,
        { slug }
      );
      setActivePost(post[0] || null);
    } catch (error) {
      console.error("Error fetching active post:", error);
    }
  }, []);

  useEffect(() => {
    getActivePost(activeSlug);
  }, [activeSlug, getActivePost]);

  const onImageClick = (index: number) => {
    setOpen(true);
    setIndex(index);
  };

  const formattedImages: Photo[] | SlideImage[] = activePost?.images
    ? activePost.images.map((image, index) => ({
        props: image.metadata,
        index: index,
        src: image.url,
        alt: image.alt,
      }))
    : [];
  // Calculate the number of images per column
  const imagesPerColumn = Math.ceil(
    formattedImages.length >= 6
      ? formattedImages.length / 3
      : formattedImages.length / 4
  );

  // Generate JSX for each column
  const columns = [];
  for (let i = 0; i < 4; i++) {
    const startIndex = i * imagesPerColumn;
    const endIndex = Math.min(
      (i + 1) * imagesPerColumn,
      formattedImages.length
    );
    columns.push(
      <Col key={i} column={i * 4 + 1} span={4}>
        {formattedImages.slice(startIndex, endIndex).map((img, index) => (
          <Image
            key={index}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 800px) 100vw, 800px"
            alt={img.alt || ""}
            src={img.src}
            onClick={() => onImageClick(index + startIndex)}
            width={500}
            height={620}
          />
        ))}
      </Col>
    );
  }
  return (
    <S.PostCotainer className="post_content">
      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={4} span={18}>
          <nav>
            <ul>
              {postsTitle.map((post, index) => (
                <li
                  key={index}
                  onClick={() => setActiveSlug(post.slug.current)}
                >
                  {post.title}
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </GridContainer>

      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={2} span={11}>
          <PortableText value={activePost?.content || []} />
        </Col>
      </GridContainer>

      <ImageGridContainer>
        <GridContainer colCount={12} colGap={20} rowGap={20}>
          {columns}
        </GridContainer>
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          styles={{
            container: { backgroundColor: "rgb(1, 22, 26)" },
            thumbnailsContainer: { backgroundColor: "rgb(1, 22, 26)" },
            thumbnail: { background: "rgb(1, 22, 26)" },
          }}
          render={{
            iconClose: () => <button className="yarl__button">fermer</button>,
          }}
          slides={formattedImages}
          plugins={[Thumbnails]}
        />
      </ImageGridContainer>
    </S.PostCotainer>
  );
};

export default PostContent;
