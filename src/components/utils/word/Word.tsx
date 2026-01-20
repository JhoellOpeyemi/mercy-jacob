// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextByWords } from "@/utils";
// styles import
import "./word.css";

interface WordProps {
  words: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Word = ({ words }: WordProps) => {
  const splittedWord = splitTextByWords(words);
  const wordsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".splitted-word", {
        y: "110%",
        ease: "power1.out",
        duration: 0.75,
        stagger: {
          each: 0.1,
        },
        // delay: 1,
        scrollTrigger: {
          trigger: wordsRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: wordsRef },
  );

  return (
    <span className="splitted-word__container" ref={wordsRef}>
      {splittedWord.map((word, index) => (
        <span key={index} className="splitted-word">
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

export default Word;
