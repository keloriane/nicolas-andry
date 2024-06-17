"use client";
import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "@/../public/Footer/4/Group 41.svg";
import Image from "next/image";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { archivo } from "@/app/font";

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${theme.colors.orange};
  color: black;
  font-weight: 700;

  .footer_wrapper {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 80px;
  }
  @media (max-width: 680px) {
    .footer_nav {
      justify-content: center;
      gap: 20px;

      text-align: center;
    }
    .logo_footer {
      width: 100%;
      text-align: center;
    }
    .footer_copyright {
      p {
        text-align: center;
      }
    }
  }

  .footer_nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    nav ul {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      a {
        font-weight: 700;
      }
    }
  }
  .line {
    width: 100%;
    border: 0.5px solid white;
  }
  .footer_copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    gap: 20px;
    flex-wrap: wrap;
    margin: auto;
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_wrapper">
        <div className="footer_nav">
          <div className="logo_footer">
            <Link href={"/"}>
              <Image src={Logo} alt="logo white" />
            </Link>
          </div>
          <div className="nav_footer">
            <nav>
              <ul className={archivo.className}>
                <li>
                  <Link href={"/creations"}>Creations</Link>
                </li>
                <li>
                  <Link href={"/recherches"}>Recherches</Link>
                </li>
                <li>
                  <Link href={"/ateliers"}>Ateliers</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="carbon_badge">
            <WebsiteCarbonBadge co2="0.12" percentage="89" />
          </div>
        </div>
        <div className="line"></div>
        <div className="footer_copyright">
          <p className={archivo.className}>Tout droit réservé.</p>
          <p className={archivo.className}>This website is cookie free.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
