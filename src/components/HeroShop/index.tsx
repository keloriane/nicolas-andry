"use client";
import React, { useLayoutEffect, useRef } from "react";
import * as S from "./heroshop.style";
import ImageR from "../common/ImageR";
import GridContainer from "../common/Container";
import Col from "../common/Col/index";
import gsap from "gsap";
import ImageParallax from "../common/ImageParallax";
import ResponsiveText from "../common/ResponsiveText";

const imageContent = [
  {
    src: "https://cdn.sanity.io/images/w8f1ak3c/production/a54b969c847029357a401e2d8ea5d52abd5451d0-2250x1500.jpg/DSC0051_Dexter%20Kim%20copy.jpg?rect=675,0,900,1500&w=1024&h=1707&fit=min&auto=format",
  },
  {
    src: "https://cdn.sanity.io/images/w8f1ak3c/production/bc3f529e3f10086db91822f615caf549a260362d-1500x2250.jpg/DSC0083_Dexter%20Kim.jpg?rect=75,0,1350,2250&w=1024&h=1707&fit=min&auto=format",
  },
  {
    src: "https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format",
  },
];
const HeroShop = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = imageContent.map(() =>
    useRef<HTMLImageElement | null>(null)
  ); // Initialize the array of refs

  useLayoutEffect(() => {
    imagesRef.forEach((image) => {
      if (image.current) {
        gsap.to(image.current, { y: -94 });
      }
    });
  }, [imagesRef]);

  return (
    <div>
      <header>
        <S.HeroTitle ref={titleRef}>CHANGE THE COURSE</S.HeroTitle>
        <ImageR
          height={60}
          src="https://cdn.sanity.io/images/w8f1ak3c/production/458508fedd9fae0224be491ec1cbe7ad59002d35-3600x2025.png/Untitled%20design%20(1).png?rect=351,123,2817,1784&fp-x=0.48886986301369856&fp-y=0.5015234241700385&w=2560&h=1390&fit=crop&crop=focalpoint&auto=format"
        />
      </header>
      <section>
        <GridContainer colCount={12} as="section" rowGap={70} colGap={0}>
          <Col column={[1]} span={[6]}>
            good
            <hr style={{ width: "100%" }} />
          </Col>
          <Col column={[7]} span={[6]}>
            <S.buyCost>
              shit
              <hr style={{ width: "100%" }} />
            </S.buyCost>
          </Col>
        </GridContainer>
        <GridContainer
          colCount={12}
          as="div"
          rowGap={16}
          colGap={16}
          style={{ marginTop: "30px" }}
        >
          {imageContent.map((image, index) => (
            <Col
              key={index}
              column={[
                1,
                1,
                index === 0 ? 1 : index === 1 ? 5 : 9,
                index === 0 ? 1 : index === 1 ? 5 : 9,
              ]}
              span={[12, 12, 4, 4]}
            >
              <ImageParallax src={image.src} height="90%" />
            </Col>
          ))}
        </GridContainer>
      </section>
      <section>
        <GridContainer colCount={12}>
          <Col column={[1, 1, 1, 1, 1]} span={[12, 12, 12, 12, 5]}>
            <S.TitleSection>
              WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.
            </S.TitleSection>
          </Col>
          <Col column={[1, 1, 1, 1, 9]} span={[12, 12, 12, 12, 3]}>
            <div style={{ display: "flex", flexFlow: "column", gap: "40px" }}>
              <ResponsiveText sizes={["40px", "18px", "24px", "32px"]} as="p">
                Everything we do is designed to rebuild self worth and
                independence, in order to break free from the cycle of
                disadvantage.
              </ResponsiveText>
              <p>
                Everything we do is designed to rebuild self worth and
                independence, in order to break free from the cycle of
                disadvantage.
              </p>
              <p>
                {`With every purchase you make with us, you're helping to change
                the course of someone's life; you're walking alongside
                vulnerable women as they find their way home again.`}
              </p>
              <a href="#">SHOP TO SUPPORT</a>
            </div>
          </Col>
        </GridContainer>
      </section>
      <S.SectionShop>
        <GridContainer colCount={12}>
          <Col column={[1, 1, 1, 1]} span={[12, 12, 6, 6]}>
            <div className="shop-item">
              <img
                src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=1600&h=1277&fit=crop&crop=focalpoint&auto=format"
                alt="product"
              />
              <p>ecommerce title shop</p>
            </div>
          </Col>
          <Col column={[1, 1, 7, 7]} span={[6]}>
            <div className="shop-item">
              <img
                src="https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=1,0,6165,4111&w=1600&h=1067&auto=format"
                alt="product"
              />
              <p>ecommerce title shop</p>
            </div>
          </Col>
        </GridContainer>
        <GridContainer colCount={12}>
          <Col column={[1, 1, 1, 1]} span={[12, 12, 6, 6]}>
            <div className="shop-item">
              <img
                src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1280&h=1280&auto=format"
                alt="product"
              />
              <p>ecommerce title shop</p>
            </div>
          </Col>
          <Col column={[1, 1, 7, 7]} span={[12]}>
            <div className="shop-item">
              <img
                src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1600&h=1600&auto=format"
                alt="product"
              />
              <p>ecommerce title shoper</p>
            </div>
          </Col>
        </GridContainer>
      </S.SectionShop>
      <S.AboutSection>
        <GridContainer
          colCount={12}
          rowGap={16}
          colGap={20}
          style={{ marginTop: "120px" }}
        >
          <Col column={[1, 1, 1, 1, 1]} span={[12, 12, 12, 2, 2]}>
            <div className="about-wrapper">
              <div>
                <h2>OUR IMPACT</h2>
              </div>
              <div className="about-text">
                <p>{"The thing is, we don't save anyone."}</p>
                <p>
                  What we do is provide a safe space for women to change the
                  course of their own lives.
                </p>
                <p>
                  After many years of living in crisis, abuse and complex
                  trauma, restoring self-worth is foundational for independence.
                  We believe that through experiences that promote love and
                  respect, we can spark and nurture a sense of self-worth for
                  those on the path of healing.
                </p>
              </div>
            </div>
          </Col>
          <Col column={[1, 1, 4]} span={[6, 6, 5]}>
            <ImageParallax
              src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=1024&h=1515&fit=crop&crop=focalpoint&auto=format"
              height="100%"
            />
          </Col>
          <Col column={[8, 8, 9]} span={[6, 6, 5]}>
            <div>
              <ImageParallax
                src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,57,5504,8143&w=1024&h=1515&fit=min&auto=format"
                height="100%"
              />
            </div>
          </Col>
        </GridContainer>
      </S.AboutSection>
    </div>
  );
};

export default HeroShop;
