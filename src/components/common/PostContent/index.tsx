"use client";
import React, { useEffect, useState } from "react";
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

interface Post {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string }];
}

interface PostContentProps {
  postsTitle: { title: string; slug: { current: string } }[];
}

const ImageGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Adjust the gap between images */
  width: 100%;
  max-width: 1000px;
  margin: auto;
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
  const [index, setIndex] = React.useState(-1);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const getActivePost = async (slug: string) => {
      try {
        const post: Post[] = await client.fetch(
          groq`
            *[_type == "post" && slug.current == $slug]{
              title,
              categories,
              content,
              'images': images[]{
                "url": asset->url,
                "alt": asset->alt
              }
            }
          `,
          { slug }
        );
        setActivePost(post[0] || null);
      } catch (error) {
        console.error("Error fetching active post:", error);
      }
    };

    getActivePost(activeSlug);
  }, [activeSlug]);

  const onPostClick = (slug: { current: string }) => {
    setActiveSlug(slug.current);
  };

  const formattedImages: Photo[] | SlideImage[] =
    activePost?.images.map((image, index) => ({
      index: index,
      src: image.url,
      alt: image.alt,
      width: open ? "75%" : 300, // Adjust width as needed
      height: open ? "75%" : 500, // Adjust height as needed
    })) || [];

  return (
    <S.PostCotainer className="post_content">
      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={4} span={18}>
          <nav>
            <ul>
              {postsTitle.map((post, index) => (
                <li key={index} onClick={() => onPostClick(post.slug)}>
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
        {activePost && activePost.images ? (
          <PhotoAlbum
            layout="columns"
            columns={4}
            
            photos={formattedImages}
            onClick={({ index: current }) => {
              setOpen(true);
              setIndex(current);
            }}
          />
        ) : (
          <h3>Loading</h3>
        )}
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
        
          slides={formattedImages}
          plugins={[Thumbnails]}
        />
      </ImageGridContainer>
    </S.PostCotainer>
  );
};

export default PostContent;
