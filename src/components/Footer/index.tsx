"use client";
import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "@/../public/Footer/4/Group 41.svg";
import Image from "next/image";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { archivo, playfare } from "@/app/font";
import TransitionLink from "../common/TransitionLink";
import { useFooter } from "@/context/FooterContext";
import pxl from "@/../public/pxl.svg";

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #1e1e1e;
  color: black;
  font-weight: 700;
  position: relative;
  a {
    &:hover {
      rect {
        fill: ${theme.colors.orangeL};
      }
    }
  }

  .kf-logo {
    width: 30px;
  }

  .logo_item {
    position: absolute;
    top: 10%;
    right: 48%;
  }
  .line {
    width: 95%;
    height: 0.5px;
    border: 0.5px solid ${theme.colors.orangeL};
    opacity: 0.4;
    margin: 20px auto;
  }

  .navigation_container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  .footer_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    gap: 20px;

    h2 {
      font-size: 88px;
      color: rgba(244, 244, 244, 0.56);
      font-weight: 10;
    }
  }

  h4 {
    font-size: 20px;
    color: ${theme.colors.white};
  }

  footer {
    ul {
      p {
        font-size: 20px;
        color: ${theme.colors.white};
      }
    }
  }

  ul {
    margin-left: 20px;
    font-weight: 400;
    color: ${theme.colors.white};
    li {
      margin-left: 20px;
      font-weight: 400;
      &:hover {
        color: ${theme.colors.orangeL};
      }
    }
  }
  .footer_copyright {
    font-weight: 100px;
    text-align: center;
    font-weight: 300;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 40px;
    span {
      height: 30px;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Footer = ({
  locale,
  cookie,
  droit,
}: {
  locale: string;
  cookie: string;
  droit: string;
}) => {
  const navigation = useFooter();

  const navigationAtelier = navigation?.atelierNavData[0]?.atelierItems;

  const navigationCreation = navigation.navigationData.filter(
    (nav: any) => nav.categories[0].title === "Creations"
  );
  const navigationRecherche = navigation.navigationData.filter(
    (nav: any) => nav.categories[0].title === "Recherches"
  );

  return (
    <FooterContainer>
      <div className="footer_header">
        <div className="line"></div>
        <div className="logo_container">
          <Link href={"/"} className="logo_item">
            <svg
              width="55"
              height="72"
              viewBox="0 0 55 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.950928" width="54.3312" height="70.098" fill="black" />
              <path
                d="M30.0642 17.9483C30.13 17.9483 30.1629 18.014 30.1629 18.1456C30.1629 18.2771 30.13 18.3429 30.0642 18.3429C29.1435 18.3429 28.4749 18.595 28.0584 19.0992C27.6419 19.6034 27.4336 20.4254 27.4336 21.5653V38.8943C27.4336 38.9382 27.3788 38.9711 27.2692 38.993C27.1596 39.0149 27.0829 39.004 27.039 38.9601L11.9132 20.6446L11.6172 20.3158V34.9156C11.6172 36.0555 11.8145 36.8776 12.2091 37.3818C12.6256 37.864 13.2833 38.1052 14.182 38.1052C14.2478 38.1052 14.2807 38.1709 14.2807 38.3025C14.2807 38.434 14.2478 38.4998 14.182 38.4998C13.634 38.4998 13.2175 38.4888 12.9325 38.4669L11.2884 38.434L9.61139 38.4669C9.30449 38.4888 8.8551 38.4998 8.26322 38.4998C8.21937 38.4998 8.19745 38.434 8.19745 38.3025C8.19745 38.1709 8.21937 38.1052 8.26322 38.1052C9.20584 38.1052 9.87445 37.864 10.269 37.3818C10.6636 36.8776 10.8609 36.0555 10.8609 34.9156V19.5266C10.006 18.7375 9.14008 18.3429 8.26322 18.3429C8.19745 18.3429 8.16457 18.2771 8.16457 18.1456C8.16457 18.014 8.19745 17.9483 8.26322 17.9483L9.47986 17.9812C9.74292 18.0031 10.1046 18.014 10.565 18.014C11.0473 18.014 11.4418 18.0031 11.7487 17.9812C12.0556 17.9592 12.2968 17.9483 12.4722 17.9483C12.6475 17.9483 12.7681 17.9921 12.8339 18.0798C12.9215 18.1456 13.0531 18.31 13.2285 18.573C13.4915 18.9676 13.7546 19.3293 14.0176 19.6582L26.6773 35.2115V21.5653C26.6773 20.4254 26.48 19.6034 26.0855 19.0992C25.7128 18.595 25.0771 18.3429 24.1783 18.3429C24.1344 18.3429 24.1125 18.2771 24.1125 18.1456C24.1125 18.014 24.1344 17.9483 24.1783 17.9483L25.4607 17.9812C26.1183 18.025 26.6554 18.0469 27.0719 18.0469C27.4665 18.0469 28.0146 18.025 28.716 17.9812L30.0642 17.9483Z"
                fill="white"
                fillOpacity="0.86"
              />
              <path
                d="M46.5189 48.6491C46.6066 48.6491 46.6505 48.7149 46.6505 48.8464C46.6505 48.9779 46.6066 49.0437 46.5189 49.0437C46.1024 49.0437 45.4558 49.0218 44.5789 48.9779C43.702 48.9341 43.0663 48.9122 42.6717 48.9122C42.1894 48.9122 41.5756 48.9341 40.8303 48.9779C40.1288 49.0218 39.5917 49.0437 39.2191 49.0437C39.1314 49.0437 39.0875 48.9779 39.0875 48.8464C39.0875 48.7149 39.1314 48.6491 39.2191 48.6491C40.0302 48.6491 40.622 48.5724 40.9947 48.4189C41.3674 48.2655 41.5537 48.0024 41.5537 47.6298C41.5537 47.3229 41.4112 46.8515 41.1262 46.2158L37.3448 38.1596H31.13L28.3021 44.8676C27.9952 45.613 27.8418 46.2268 27.8418 46.7091C27.8418 48.0024 28.9159 48.6491 31.0642 48.6491C31.1738 48.6491 31.2287 48.7149 31.2287 48.8464C31.2287 48.9779 31.1738 49.0437 31.0642 49.0437C30.6697 49.0437 30.0997 49.0218 29.3544 48.9779C28.5213 48.9341 27.7979 48.9122 27.1841 48.9122C26.6142 48.9122 25.9565 48.9341 25.2112 48.9779C24.5535 49.0218 24.0055 49.0437 23.5671 49.0437C23.4575 49.0437 23.4027 48.9779 23.4027 48.8464C23.4027 48.7149 23.4575 48.6491 23.5671 48.6491C24.1809 48.6491 24.696 48.5395 25.1125 48.3203C25.551 48.0792 25.9565 47.6736 26.3292 47.1036C26.7238 46.5118 27.1512 45.6678 27.6116 44.5717L34.5498 28.1963C34.5936 28.1305 34.6703 28.0976 34.7799 28.0976C34.8896 28.0976 34.9553 28.1305 34.9772 28.1963L42.7375 44.5388C43.4828 46.161 44.1185 47.2571 44.6447 47.8271C45.1708 48.3751 45.7955 48.6491 46.5189 48.6491ZM31.4259 37.4691H37.0159L34.0565 31.2215L31.4259 37.4691Z"
                fill="white"
                fillOpacity="0.86"
              />
            </svg>
          </Link>
        </div>

        <div className="navigation_container">
          <nav className="footer_nav">
            <h4>Créations</h4>
            <ul>
              {navigationCreation.map((nav: any, index) => (
                <li key={index}>
                  <Link href={`/${locale}/creations/${nav.slug.current}`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer_nav">
            <h4>Recherches</h4>
            <ul>
              {navigationRecherche.map((nav: any, index) => (
                <li key={index}>
                  <Link href={`/${locale}/recherches/${nav.slug.current}`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer_nav">
            <h4>Ateliers</h4>
            <ul>
              {navigationAtelier &&
                navigationAtelier.map((nav: any, index: number) => (
                  <li key={index}>
                    <Link href={`/${locale}/ateliers/${nav.slug.current}`}>
                      {nav.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="line"></div>
      </div>
      <div className="footer_wrapper">
        <div className="footer_copyright">
          <span className={archivo.className}>{droit}</span>
          <span>{cookie}</span>
          <span>
            made by{"    "}
            <Link href="https://www.pxl-studio.com">
              {" "}
              <svg
                className="kf-logo"
                width="52"
                height="59"
                viewBox="0 0 52 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="-6.10352e-05"
                  width="22.6982"
                  height="52.3676"
                  rx="8.53275"
                  fill={"white"} // Set initial color
                />
                <rect
                  x="29.8389"
                  y="0.390137"
                  width="22.6982"
                  height="46.7931"
                  rx="8.53275"
                  transform="rotate(39.6189 29.8389 0.390137)"
                  fill={"white"} // Set initial color
                />
                <rect
                  x="51.4866"
                  y="42.8381"
                  width="22.6982"
                  height="46.7931"
                  rx="8.53275"
                  transform="rotate(134.599 51.4866 42.8381)"
                  fill={"white"} // Set initial color
                />
                <path
                  d="M4.95863 37.4443V20.215H9.63612V27.1807H9.87167L15.0539 20.215H20.5054L14.6838 27.8874L20.64 37.4443H15.0539L11.1841 30.9833L9.63612 33.0023V37.4443H4.95863ZM21.8935 37.4443V20.215H34.0078V23.9839H26.571V26.9452H33.2675V30.7141H26.571V37.4443H21.8935Z"
                  fill="black"
                />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
