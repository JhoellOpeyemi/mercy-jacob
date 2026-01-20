// hooks import
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// utils import
import { splitTextByCharacters } from "@/utils";
// styles import
import "./stat.css";
import { useRef } from "react";

interface StatProps {
  number: string;
  firstText: string;
  secondText: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Stat = ({ number, firstText, secondText }: StatProps) => {
  const statsRef = useRef<HTMLParagraphElement>(null);
  const splittedNumber = splitTextByCharacters(number);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: statsRef.current,
            start: "clamp(top 85%)",
            end: "clamp(bottom 70%)",
            scrub: true,
          },
        })
        .from(".stat__number", {
          y: "100%",
          stagger: {
            each: 0.1,
          },
        })
        .from(
          ".stat__desc",
          {
            opacity: 0,
          },
          "<",
        );
    },
    { scope: statsRef },
  );

  return (
    <p className="stat flex-column" ref={statsRef}>
      <span className="stat__number-container">
        {splittedNumber.map((number, index) => (
          <span key={index} className="stat__number">
            {number}
          </span>
        ))}
      </span>
      <span className="stat__desc">
        {firstText} <br /> {secondText}
      </span>
    </p>
  );
};

export default Stat;
