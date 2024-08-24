"use client";
import React, { useContext, useRef, useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { archivo } from "@/app/font";
import { useMenu } from "@/context/MenuContext";
import TransitionLink from "../TransitionLink";
import * as S from "./menu.styles";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import Logo from "../Logo";

const Menu = ({ locale }: { locale: string }) => {
  const navBar = useRef<HTMLHeadElement>(null);
  const fullScreenMenu = useRef<HTMLDivElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const [navItem, setNavItem] = useState([{ name: "home", link: "" }]);
  const { menuItems } = useMenu();

  const router = useRouter();
  const pathname = usePathname();

  const [selectedLocale, setSelectedLocale] = useState<string>(locale);

  useEffect(() => {
    const parts = pathname.split("/");
    const detectedLocale = parts[1] || "fr";
    setSelectedLocale(detectedLocale);
    setNavItem(menuItems);
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === selectedLocale) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPathname = `/${segments.join("/")}`;
    router.push(newPathname);
  };

  const openMenu = () => {
    gsap.to(fullScreenMenu.current, {
      duration: 0.5,
      opacity: 1,
      x: 0,
      visibility: "visible",
      ease: "power3.out",
    });
  };

  const closeMenu = () => {
    gsap.to(fullScreenMenu.current, {
      duration: 0.5,
      opacity: 0,
      x: "100%",

      ease: "power3.in",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fullScreenMenu.current &&
        !fullScreenMenu.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.MenuContainer ref={navBar} className={archivo.className}>
      <div className="logo-container">
        <TransitionLink href={`/${locale}`}>
          <Logo />
        </TransitionLink>
      </div>
      <div className="agenda_cta">
        <nav>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i}>
                <TransitionLink
                  className="link_transition_menu"
                  href={`/${locale}/${item.link}`}
                >
                  {item.name}
                </TransitionLink>
              </li>
            ))}
            {/* <li>
              <select value={selectedLocale} onChange={handleLanguageChange}>
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="nl">Nederlands</option>
              </select>
            </li> */}
          </ul>
        </nav>
        <div className="cta_container">
          <Link href={`/${locale}/agenda`} className="cta">
            Agenda
          </Link>
        </div>
      </div>
      <div className="mobile_cta">
        <button ref={menuTrigger} onClick={openMenu}>
          menu
        </button>
      </div>
      <div
        className="fullscreen_menu"
        ref={fullScreenMenu}
        style={{ visibility: "hidden", opacity: 0 }}
      >
        <div className="fs_menu">
          <button onClick={closeMenu}>fermer</button>
        </div>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i} onClick={closeMenu}>
              <TransitionLink
                className="link_transition_menu"
                href={`/${locale}/${item.link}`}
              >
                {item.name}
              </TransitionLink>
            </li>
          ))}
          <li>
            <select value={selectedLocale} onChange={handleLanguageChange}>
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="nl">Nederlands</option>
            </select>
          </li>
        </ul>
      </div>
    </S.MenuContainer>
  );
};

export default Menu;
