"use client";
import React from "react";
import Logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const MenuContainer = styled.menu`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  z-index: 200;
  background-color: ${theme.colors.white};
  nav {
    ul {
      display: flex;
      justify-content: space-evenly;
      gap: 30px;
      align-items: center;
      a {
        color: ${theme.colors.black};
        &:hover {
          color: ${theme.colors.orange};
        }
      }
    }
  }
  .agenda_cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cta_container {
      padding: 0 50px;
      .cta {
        background-color: ${theme.colors.black};
        padding: 10px 25px;
        transition: all 0.2s ease-in;
        color: white;
        &:hover {
          background-color: ${theme.colors.orange};
        }
      }
    }
  }
`;
const Menu = () => {
  return (
    <MenuContainer>
      <div className="logo-container">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="agenda_cta">
        <nav>
          <ul>
            <li>
              <Link href="/creations">Créations</Link>
            </li>
            <li>
              <Link href="/creations">Recherches</Link>
            </li>
            <li>
              <Link href="/creations">Ateliers</Link>
            </li>
          </ul>
        </nav>
        <div className="cta_container">
          <Link href="/agenda" className="cta">
            Agenda
          </Link>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
