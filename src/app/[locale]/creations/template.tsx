"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Function to determine if the device is mobile
    const isMobile = () => {
      return (
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
      );
    };

    // Skip Lenis initialization on mobile
    if (!isMobile()) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Cleanup Lenis on component unmount
      return () => {
        lenis.destroy();
      };
    }

    // GSAP animation for page fade-in
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
