// hooks import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// components import
import ProcessCard from "./process-card/ProcessCard";
// utils import
import { processesList } from "@/utils";
// styles import
import "./processes.css";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Processes = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    return () => mm.revert();
  });

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
