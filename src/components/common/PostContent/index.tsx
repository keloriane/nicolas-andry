"use client";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import GridContainer from "../Container";
import Col from "../Col";
import * as S from "./post-content.styles";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import gsap from "gsap";
import Image from "next/image";

interface Post {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string; metadata: any }];
  mainImage: { url: string };
}

interface PostContentProps {
  postsTitle: { title: string; slug: { current: string } }[];
}

interface PostContentProps {
  creation: {
    activePost: {
      title: string;
      content: [];
      mainImage: { url: string };
      images: [{ url: string; alt: string; metadata: any }];
    };
  };
  postsTitle: { title: string; slug: { current: string } }[];
}

const PostContent: React.FC<PostContentProps> = ({ postsTitle }) => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>("ten-weingaert-2022");
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getActivePost = useCallback(async (slug: string) => {
    setLoading(true);
    try {
      const post: Post[] = await client.fetch(
        groq`
          *[_type == "post" && slug.current == $slug]{
            title,
            categories,
            content,
            mainImage{"url": asset->url},
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getActivePost(activeSlug);
  }, [activeSlug, getActivePost]);

  useLayoutEffect(() => {
    // Animate elements when activePost changes
    if (activePost) {
      gsap.fromTo(
        ".text_header_wrapper",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.1,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".image_header_wrapper",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.1,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".image_wrapper",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.2,
          stagger: 0.1,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }
  }, [activePost]);

  const formattedImages = useMemo(() => {
    return activePost?.images
      ? activePost.images.map((image, index) => ({
          props: image.metadata,
          index: index,
          src: image.url,
          alt: image.alt,
        }))
      : [];
  }, [activePost?.images]);

  const onImageClick = (index: number) => {
    setOpen(true);
    setIndex(index);
  };

  const renderPost = () => {
    if (loading) return <p>Loading...</p>;
    if (!activePost) return <p>No data available.</p>;

    return (
      <>
        <Col
          column={[2, 2, 2, 2]}
          span={[22, 22, 11, 11]}
          className="text_header_wrapper"
        >
          <PortableText value={activePost?.content || []} />
        </Col>
        <Col
          column={[2, 2, 13, 13]}
          span={[22, 22, 10, 10]}
          className="image_header_wrapper"
        >
          {activePost ? (
            <Image
              src={activePost.mainImage.url as string}
              layout="fill"
              style={{ objectFit: "contain" }}
              alt={activePost.title as string}
              priority={true}
              sizes="100%"
            />
          ) : (
            <p>Loading main image...</p>
          )}
        </Col>
      </>
    );
  };

  const renderImageGrid = () => {
    if (!formattedImages.length) return null;
    const columns = [];
    const imagesPerColumn = Math.ceil(
      formattedImages.length >= 6
        ? formattedImages.length / 5
        : formattedImages.length / 3
    );

    for (let i = 0; i < 5; i++) {
      const startIndex = i * imagesPerColumn;
      const endIndex = Math.min(
        (i + 1) * imagesPerColumn,
        formattedImages.length
      );
      columns.push(
        <Col key={i} column={[1, 1, i * 5 + 1]} span={[24, 24, 5]}>
          {formattedImages.slice(startIndex, endIndex).map((img, index) => (
            <div className="image_wrapper" key={index}>
              <Image
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                sizes="(max-width: 800px) 100vw, 800px"
                alt={img.alt || ""}
                src={img.src}
                onClick={() => onImageClick(index + startIndex)}
                width={500}
                height={620}
                loading="lazy"
              />
            </div>
          ))}
        </Col>
      );
    }
    return columns;
  };

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

      <GridContainer colCount={24}>{renderPost()}</GridContainer>

      <GridContainer
        colCount={formattedImages.length < 6 ? 15 : 20}
        className="post__container"
      >
        {renderImageGrid()}
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
        animation={{ fade: 250, swipe: 0 }}
        render={{
          iconClose: () => <button className="yarl__button">fermer</button>,
        }}
        slides={formattedImages}
        plugins={[Thumbnails]}
      />
    </S.PostCotainer>
  );
};

export default PostContent;
