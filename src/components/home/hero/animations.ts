import gsap from "gsap";
import { easeEntrance } from "@/utils";

export const heroAnimation = (
  tlRef: React.RefObject<gsap.core.Timeline | null>,
) => {
  tlRef.current = gsap.timeline({ delay: 4, repeat: -1 });

  gsap.set(".hero__image-container-1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  });

  tlRef.current
    .to(
      [
        ".hero__image-container-1",
        ".hero__image-container-2",
        ".hero__image-container-3",
        ".hero__image-container-4",
      ],
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: easeEntrance,
        stagger: 5,
      },
    )
    .to(
      [
        ".hero__image-container-1",
        ".hero__image-container-2",
        ".hero__image-container-3",
      ],
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 0.5,
      },
    );
};
