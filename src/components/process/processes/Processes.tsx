// hooks import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// components import
import ProcessCard from "./process-card/ProcessCard";
// utils import
import { easeEntrance, processesList } from "@/utils";
// styles import
import "./processes.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Processes = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 48.0625rem)", () => {
        gsap.to(".process-connector", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: easeEntrance,
          scrollTrigger: {
            trigger: ".process-connector",
            start: "top 85%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <ul className="processes__list" ref={containerRef}>
      {processesList.map(
        ({ title, description }: { title: string; description: string }) => (
          <div className="process__item-container" key={title}>
            <ProcessCard title={title} description={description} />
            <div className="process-connector" />
          </div>
        ),
      )}
    </ul>
  );
};

export default Processes;
