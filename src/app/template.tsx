"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function animatePagein() {
      const el = document.querySelector(".content-anim");
      if (el) {
        const tl = gsap.timeline();

        gsap.to(el, {
          duration: 1,
          opacity: 1,
        });
      }
    }
    animatePagein();
  }, []);
  return (
    <div style={{ opacity: 0 }} className="content-anim">
      {children}
    </div>
  );
}
