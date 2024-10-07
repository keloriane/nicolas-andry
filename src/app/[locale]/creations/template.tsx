"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

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
  return <div className="content-anim">{children}</div>;
}
