"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Menu from "@/components/common/Menu";
import Contact from "@/components/Contact";
import { archivo } from "../font";
import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function animatePagein() {
      const el = document.querySelector(".content-anim");
      if (el) {
        gsap.set(el, { opacity: 0 });

        gsap.to(el, {
          duration: 1,
          opacity: 1,
        });
      }
    }
    animatePagein();
  }, []);
  return (
    <div className="content-anim">
      <Menu />
      {children}
      <Contact archivo={archivo.className} />
      <Footer />
    </div>
  );
}
