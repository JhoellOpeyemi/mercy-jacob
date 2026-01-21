import gsap from "gsap";
import { easeEntrance } from "@/utils";

export const createNavTimeline = (): gsap.core.Timeline => {
  const timeline = gsap.timeline({ paused: true });

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

  return timeline;
};

export const controlNavTimeline = (
  timeline: gsap.core.Timeline | null,
  isOpen: boolean,
): void => {
  if (!timeline) return;

  if (isOpen) {
    timeline.play();
  } else {
    timeline.reverse();
  }
};
