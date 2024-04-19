"use client";
import { theme } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "@/../public/Footer/4/Group 41.svg";
import Image from "next/image";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${theme.colors.orange};
  color: white;
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
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_wrapper">
        <div className="footer_nav">
          <div className="logo_footer">
            <Image src={Logo} alt="logo white" />
          </div>
          <div className="nav_footer">
            <nav>
              <ul>
                <li>
                  <Link href={"/"}>Creations</Link>
                </li>
                <li>
                  <Link href={"/"}>Recherches</Link>
                </li>
                <li>
                  <Link href={"/"}>Ateliers</Link>
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
          <p>©Tout droit réservé.</p>
          <p>©This website is cookie free.</p>
          <Link href={"/"}>made by Kevin Flabat</Link>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
