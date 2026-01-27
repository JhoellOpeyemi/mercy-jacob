import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { brandsList } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export const animateMobileBrands = (
  brandsRef: React.RefObject<HTMLDivElement | null>,
) => {
  gsap.from(".home-brands__item", {
    opacity: 0,
    duration: 0.75,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: brandsRef.current,
      start: "top 80%",
    },
  });
};

export const animateDesktopBrands = (
  brandsRef: React.RefObject<HTMLDivElement | null>,
) => {
  const length = brandsList.length;
  const height = 6; // 6rem
  const totalScroll = length * height - height * 2;

  gsap.to(".home-brands__list", {
    y: -totalScroll + "rem",
    scrollTrigger: {
      trigger: brandsRef.current,
      start: "top 15%",
      end: "bottom -80%",
      pin: true,
      pinSpacing: true,
      scrub: true,
    },
  });
};
