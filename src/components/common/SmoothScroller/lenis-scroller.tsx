"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const LenisScroller = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <></>;
};
