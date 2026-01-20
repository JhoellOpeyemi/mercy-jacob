import gsap from "gsap";
import { easeEntrance } from "@/utils";

export const navAnimation = (isNavOpen: boolean) => {
  const timeline = gsap.timeline({ delay: 0.2 });

  if (isNavOpen) {
    timeline
      .from(".nav__container", {
        y: "-100%",
        duration: 0.75,
        ease: easeEntrance,
      })
      .from(
        ".nav__item",
        {
          scaleX: 0,
          stagger: {
            each: 0.08,
          },
        },
        "-=0.5",
      )
      .from(
        ".nav__link",
        {
          opacity: 0,
          stagger: {
            each: 0.08,
          },
        },
        "-=0.5",
      )
      .from(
        ".nav__socials-item",
        {
          opacity: 0,
          stagger: {
            each: 0.08,
          },
        },
        "-=0.5",
      );
  }
};
