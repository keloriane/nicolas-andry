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
import styled from "styled-components";
import { theme } from "@/styles/theme";

interface Post {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string; metadata: any }];
  mainImage: { url: string };
  remerciements: [];
}

interface PostContentProps {
  postsTitle: { title: string; slug: { current: string } }[];
}

const GridContainerV = styled.div`
  column-count: 4;
  margin-top: 100px;
  figure {
    margin-bottom: 20px;
  }
  @media (max-width: 800px) {
    column-count: 2;
  }
  @media (max-width: 480px) {
    column-count: 1;
  }
  figure > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }
`;

const LoadingWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  p {
    text-align: center;
    font-size: 32px;
    color: ${theme.colors.orange};
  }
`;

const PostContent: React.FC<PostContentProps> = ({ postsTitle }) => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>(
    postsTitle[0].slug.current
  );
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
            remerciements,
            mainImage{"url": asset->url},
            'images': images[]{
              "url": asset->url,
              "alt": asset->alt,
              "metadata": asset->ref
            }
          }
        `,
        { slug },
        { next: { revalidate: 4000 } }
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
    if (activePost) {
      gsap.fromTo(
        [".text_header_wrapper", ".image_header_wrapper", ".image_grid_item"],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.04 }
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
    if (loading) {
      return (
        <LoadingWrapper>
          <p>Loading...</p>
        </LoadingWrapper>
      );
    }

    if (!activePost) {
      return <p>No data available.</p>;
    }

    return (
      <>
        <Col
          column={[2, 2, 2, 2]}
          span={[22, 22, 11, 11]}
          className="text_header_wrapper"
        >
          <div className="rich-text">
            <PortableText value={activePost?.content || []} />
          </div>
        </Col>
        <Col
          column={[2, 2, 13, 13]}
          span={[22, 22, 10, 10]}
          className="image_header_wrapper"
        >
          {activePost ? (
            <Image
              src={activePost.mainImage.url as string}
              fill
              style={{ objectFit: "contain" }}
              alt={activePost.title as string}
              priority
              sizes="100%"
            />
          ) : (
            <p>Loading main image...</p>
          )}
        </Col>
      </>
    );
  };

  return (
    <S.PostContainer className="post_content">
      <GridContainer colCount={24} colGap={20} className="post__container">
        <Col column={4} span={18}>
          <nav>
            <ul>
              {postsTitle.map((post, index) => (
                <li
                  className="post_item_list"
                  key={index}
                  onClick={() => setActiveSlug(post.slug.current)}
                  style={{
                    cursor: "pointer",
                    color:
                      post.slug.current === activeSlug
                        ? theme.colors.orange
                        : "",
                  }}
                >
                  {post.title}
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </GridContainer>

      <GridContainer colCount={24}>{renderPost()}</GridContainer>
      <GridContainerV>
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
          thumbnails={{ vignette: true, gap: 10, imageFit: "cover" }}
        />
        {formattedImages.map((img, index) => (
          <S.ImageWrapper key={index}>
            <Image
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              sizes="(max-width: 800px) 100vw, 800px"
              alt={img.alt || ""}
              src={img.src}
              onClick={() => onImageClick(index)}
              width={500}
              height={620}
              loading="lazy"
              className={loading ? "" : "image_wrapper loaded image_grid_item"}
              placeholder="blur"
              blurDataURL={img.src + "?w=10&q=10"} // Assuming images are served by a CDN that supports query params for low-res versions
            />
          </S.ImageWrapper>
        ))}
      </GridContainerV>
      {activePost?.remerciements ? (
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ marginBottom: "20px" }}>Remerciement</h2>
          <div style={{ marginLeft: "40px" }} className="rich-text">
            <PortableText value={activePost ? activePost.remerciements : []} />
          </div>
        </div>
      ) : (
        ""
      )}
    </S.PostContainer>
  );
};

export default PostContent;
