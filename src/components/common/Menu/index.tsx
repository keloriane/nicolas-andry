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
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Menu = ({ locale }: { locale: string }) => {
  const navBar = useRef<HTMLHeadElement>(null);
  const fullScreenMenu = useRef<HTMLDivElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const { menuItems } = useMenu();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const [selectedLocale, setSelectedLocale] = useState<string>(locale);

  // Function to change menu background to transparent and text color to white
  const changeMenuStyle = (isDark: boolean) => {
    if (pathname === "/fr" || path === "creations" || path === "recherches") {
      if (navBar.current) {
        gsap.to(navBar.current, {
          backgroundColor: isDark ? "transparent" : "#FFFFFF",
          color: isDark ? "#FFFFFF" : `${theme.colors.black}`,
          duration: 0.5,
        });
      }
    }
  };

  // ScrollTrigger setup to re-run on pathname change
  useEffect(() => {
    const updateScrollTrigger = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up previous triggers

      ScrollTrigger.create({
        trigger: ".dark_bg", // Class of the element to watch
        start: "top center", // Start when top of .dark-bg hits center of the viewport
        end: "bottom center", // End when bottom of .dark-bg leaves center of the viewport
        onEnter: () => changeMenuStyle(true), // On entering .dark-bg, set transparent menu and white text
        onLeave: () => changeMenuStyle(false), // On leaving .dark-bg, revert to original menu style
        onEnterBack: () => changeMenuStyle(true), // On scrolling back into .dark-bg
        onLeaveBack: () => changeMenuStyle(false), // On scrolling out of .dark-bg from the bottom
      });
    };

    updateScrollTrigger();

    // Cleanup function to kill ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // Re-run effect whenever pathname changes

  // Handle locale changes
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
            <select value={selectedLocale}>
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
