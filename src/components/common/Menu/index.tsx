"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { theme } from "@/styles/theme";
import { archivo } from "@/app/font";
import { useMenu } from "@/context/MenuContext";
import TransitionLink from "../TransitionLink";
import * as S from "./menu.styles";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import Logo from "../Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Menu = ({ locale }: { locale: string }) => {
  const navBar = useRef<HTMLHeadElement>(null);
  const fullScreenMenu = useRef<HTMLDivElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const { menuItems } = useMenu();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const [selectedLocale, setSelectedLocale] = useState<string>(locale);

  useEffect(() => {
    const parts = pathname.split("/");
    const detectedLocale = parts[1] || "fr";
    setSelectedLocale(detectedLocale);
  }, [pathname]);

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
      onComplete: () => {
        if (fullScreenMenu.current) {
          fullScreenMenu.current.style.visibility = "hidden";
        }
      },
    });
  };

  return (
    <S.MenuContainer ref={navBar} className={archivo.className}>
      <div className="logo-container">
        <TransitionLink href={`/${locale}`}>
          <Logo fill={path === undefined ? "#f59628" : "black"} />
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
                  <span
                    style={{
                      color: path === `${item.link}` ? "orange" : "",
                    }}
                  >
                    {item.name}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cta_container">
          <Link
            href={`/${locale}/agenda`}
            className="cta"
            style={
              path === "agenda"
                ? { backgroundColor: theme.colors.orange }
                : { backgroundColor: "" }
            }
          >
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
            <select
              value={selectedLocale}
              onChange={(e) => setSelectedLocale(e.target.value)}
            >
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
