import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { easeEntrance } from "@/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// styles import
import "./image.css";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const animation = gsap.to(".image-overlay", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        delay: 1,
        ease: easeEntrance,
      });

      return () => {
        animation.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="image-container" ref={containerRef}>
      <img src={src} alt={alt} className="image" />
      <div className="image-overlay" />
    </div>
  );
};

export default Image;
