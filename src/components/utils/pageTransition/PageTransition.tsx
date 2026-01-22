// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/hooks/useLoading";
// components import
import Text from "@/components/utils/text/Text";
// styles import
import "./pageTransition.css";
import { easeExit, easeEntrance } from "@/utils";

gsap.registerPlugin(useGSAP);

const PageTransition = () => {
  const { setPageTransition, page } = useLoading();

  const pageTransitionRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const blocks = pageTransitionRef.current?.querySelectorAll(
        ".page-transition__blocks div",
      );
      if (!blocks) return;

      gsap.set(blocks, { x: "-100%" });

      tl.current = gsap
        .timeline({
          delay: 0.2,
          onComplete: () => {
            setPageTransition(false);
          },
        })
        .to(pageTransitionRef.current, {
          visibility: "visible",
          duration: 0.1,
        })
        .to(blocks, {
          x: "0%",
          duration: 0.6,
          ease: easeEntrance,
          stagger: {
            each: 0.075,
            from: "start",
          },
        })
        .to(".page-transition__text .splitted-char ", {
          y: "0%",
          ease: easeEntrance,
          stagger: {
            each: 0.035,
          },
        })
        .to(
          ".page-transition__text .splitted-char ",
          {
            y: "-100%",
            ease: easeExit,
            stagger: {
              each: 0.035,
            },
          },
          "+=0.5",
        )
        .to(
          blocks,
          {
            x: "100%",
            duration: 0.6,
            ease: easeExit,
            stagger: {
              each: 0.075,
              from: "start",
            },
          },
          "-=0.25",
        )
        .to(pageTransitionRef.current, {
          visibility: "hidden",
          duration: 0.1,
        });
    },
    { scope: pageTransitionRef },
  );

  return (
    <div className="page-transition" ref={pageTransitionRef}>
      <div className="page-transition__blocks">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <p className="page-transition__text playfair-display">
        <Text texts={page} />
      </p>
    </div>
  );
};

export default PageTransition;
