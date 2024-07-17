import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animatePagein() {
  const el = document.querySelector(".loader-main");
  if (el) {
    const tl = gsap.timeline();
    tl.set(el, { yPercent: 0 });
    gsap.to(el, {
      duration: 1,
      yPercent: 100,
    });
  }
}

export function animatePageOut(href: string, router: AppRouterInstance) {
  const el = document.querySelector(".content-anim");
  if (el) {
    gsap.to(el, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        router.push(href);
      },
    });
  }
}
