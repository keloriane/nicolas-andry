import React from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import ImageR from "../common/ImageR";
import Divider from "../common/Divider";
import * as S from "@/styles/container.styles";
import gsap from "gsap";
import ResponsiveText from "../common/ResponsiveText";

const PageContent = () => {
  const imageHero = React.useRef<HTMLImageElement>(null);
  const heroContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.set(imageHero.current, { scale: 1.6, opacity: 0 });
    gsap.fromTo(
      imageHero.current,
      { scale: 1.6 },
      { scale: 1, opacity: 1, duration: 2 }
    );

    const handleScroll = () => {
      if (imageHero.current) {
        const scrollTop = window.scrollY;
        const targetY = Math.min(scrollTop / 2, 250);
        gsap.set(imageHero.current, {
          duration: 2,
          y: targetY,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageHero]);

  return (
    <div>
      <div className="hero" ref={heroContainer}>
        <ImageR
          height={52}
          reactRef={imageHero}
          opacity={1}
          src="https://cdn.sanity.io/images/n9loiw6l/production2/bb5c87e29552f1666c6a003cf14119e567f431ae-4320x2700.png?w=3520&fm=webp"
        />
      </div>
      <section id="about" style={{ marginTop: "96px", marginBottom: "96px" }}>
        <GridContainer colCount={12} as="section" rowGap={70} colGap={16}>
          <Col column={[1, 1, 1, 1]} span={[12, 12, 6, 6]}>
            <S.TitleMask style={{ fontSize: "64px" }}>
              MAMA : We are art. MAMA : We are art.MAMA : We are art.
            </S.TitleMask>
          </Col>
          <Divider />
          <Col column={[1]} span={[6]}>
            <div style={{ maxWidth: "666px" }}>
              <ResponsiveText as="h3" sizes={["16px", "18px", "20px", "28px"]}>
                Cursor & colour transitions, SVG hero text overlays, API-driven
                event calendar for topical content and integrated eComm &
                ticketing for Australia’s most daring regional art museum.
              </ResponsiveText>
            </div>
          </Col>
          <Col column={7} span={5}>
            <GridContainer colCount={5} as="div" rowGap={16}>
              <Col column={[1]} span={[1]}>
                <p style={{ fontSize: "10px" }}> OVERVIEW</p>
              </Col>
              <Col column={[2]} span={[5]}>
                <div
                  style={{
                    width: "calc((0.25 * (100vw - 20px) - 208px)) + 48px)",
                  }}
                >
                  <p className="text-description">
                    The Murray Art Museum Albury (MAMA) is a regional Australian
                    modern art gallery with big ambitions. Their business
                    objectives of increasing visitation and paid involvement
                    with gallery programs needed to be realised through their
                    new digital platform - handling all visitor info as well as
                    transactions
                  </p>
                </div>
              </Col>
              <Col column={[1]} span={[1]}>
                <p style={{ fontSize: "10px" }}>SCOPE</p>
              </Col>
              <Col column={[2]} span={[5]}>
                <div
                  style={{
                    width: "calc((0.25 * (100vw - 20px) - 208px)) + 48px)",
                  }}
                >
                  <p className="text-description">
                    User experience UI design Fullstack development
                  </p>
                </div>
              </Col>
              <Col column={[1]} span={[1]}>
                <p style={{ fontSize: "10px" }}>RECOGNITION</p>
              </Col>
              <Col column={[2]} span={[5]}>
                <div
                  style={{
                    width: "calc((0.25 * (100vw - 20px) - 208px)) + 48px)",
                  }}
                >
                  <p className="text-description">
                    Awwwards SOTD Winner - April 2022 Webby Awards - Norminated
                    - Best Site Structure & Navigation
                  </p>
                </div>
              </Col>
            </GridContainer>
          </Col>
        </GridContainer>
      </section>
      <GridContainer colCount={12} as="section" rowGap={16} colGap={16}>
        <Col column={[1, 1, 1, 1]} span={[12, 12, 6, 6]}>
          <S.ContainerStyle>
            <S.PictureStyle>
              <S.ImageStyle
                src="https://cdn.sanity.io/images/n9loiw6l/production2/366e3a93c1edc226b9b74b6afcfff76b14d4612d-2088x2430.png?w=960&fm=webp"
                alt=""
                style={{ width: "100%" }}
              />
            </S.PictureStyle>
          </S.ContainerStyle>
        </Col>
        <Col column={[1, 1, 7, 7]} span={[12, 12, 6, 6]}>
          <S.ContainerStyle>
            <S.PictureStyle>
              <S.ImageStyle
                src="https://cdn.sanity.io/images/n9loiw6l/production2/cb01d645f1ac2e27dc4a4ffa8d59e0b8d2e4221f-2088x2430.png?w=960&fm=webp"
                alt=""
                style={{ width: "100%" }}
              />
            </S.PictureStyle>
          </S.ContainerStyle>
        </Col>
      </GridContainer>
      <section>
        <GridContainer
          colCount={12}
          as="section"
          rowGap={40}
          colGap={16}
          style={{ marginTop: "96px", marginBottom: "96px" }}
        >
          <Col column={[1, 1, 9, 9]} span={[12, 12, 5, 5]}>
            <h2 style={{ fontSize: "28px", marginBottom: "50px" }}>
              Challenges.
            </h2>
            <p>
              To encourage visitation and compel people to make the trip to this
              regional destination, the site needed to convey the breadth of
              experiences on offer at MAMA, and facilitate easy transactions -
              for both the user and the gallery.
            </p>
          </Col>
          <Col column={[1, 1, 9, 9]} span={[12, 12, 5, 5]}>
            <p>
              With a vision to create a visually rich and contextually relevant
              online tool, we needed to understand the key user groups, break
              down their needs, and create an IA that allowed for multiple user
              needs. The core UX challenges were to increase conversions -
              across event ticket purchase, enrollments in MAMA Studio workshops
              and classes, and travel packages to Albury.
            </p>
          </Col>
          <Col column={[1, 1, 9, 9]} span={[5, 5, 5, 5]}>
            <p>
              MAMA is such a large character within the city, we wanted to
              ensure the site reflected this, and cemented the museum as an
              integral part of the Albury experience, helping visitors plan
              their trip and look forward to their time in regional NSW.
            </p>
          </Col>
        </GridContainer>
      </section>
    </div>
  );
};
export default PageContent;
