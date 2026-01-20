import gsap from "gsap";
import { easeEntrance } from "@/utils";

export const headerAnimation = () => {
  const timeline = gsap.timeline({
    delay: 0.5,
  });
  timeline
    .from([".header__logo", ".header__time"], {
      opacity: 0,
      stagger: { each: 0.1 },
    })
    .from(
      [".header__menu-line:first-child", ".header__menu-line:last-child"],
      {
        width: 0,
        ease: easeEntrance,
      },
      "<",
    );
};
