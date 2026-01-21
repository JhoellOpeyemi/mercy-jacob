// hooks import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { easeEntrance } from "@/utils";
// styles import
import "./connector.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Connector = () => {
  useGSAP(() => {
    gsap.to(".connector", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: easeEntrance,
      scrollTrigger: {
        trigger: ".connector",
        start: "top 85%",
      },
    });
  });

  return <div className="connector" />;
};

export default Connector;
