// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextByCharacters } from "@/utils";
// styles import
import "./text.css";

interface TextProps {
  texts: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Text = ({ texts }: TextProps) => {
  const splittedText = splitTextByCharacters(texts);
  const textsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".splitted-char", {
        opacity: 0.1,
        duration: 0.5,
        stagger: {
          each: 0.005,
        },
        // delay: 1,
        scrollTrigger: {
          trigger: textsRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: textsRef },
  );

  return (
    <span className="splitted-text__container" ref={textsRef}>
      {splittedText.map((text, index) => (
        <span key={index} className="splitted-text">
          {text.map((char, charIndex) => (
            <span key={charIndex} className="splitted-char">
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

export default Text;
