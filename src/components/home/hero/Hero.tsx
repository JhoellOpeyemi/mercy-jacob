// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// components import
import Button from "@/components/ui/button/Button";
import Text from "@/components/utils/text/Text";
// utils import
import { heroAnimation } from "./animations";
// styled import
import "./hero.css";
import Word from "@/components/utils/word/Word";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      heroAnimation(tlRef);
    },
    { scope: heroRef },
  );

  return (
    <div className="hero-container" ref={heroRef}>
      <main className="hero flex-column">
        <div className="hero__media">
          <div className="hero__image-container hero__image-container-1">
            <img src="/anjy.jpg" alt="" className="hero__image" />
          </div>
          <div className="hero__image-container hero__image-container-2">
            <img src="/image.jpg" alt="" className="hero__image" />
          </div>
          <div className="hero__image-container hero__image-container-3">
            <img src="/image2.jpg" alt="" className="hero__image" />
          </div>
          <div className="hero__image-container hero__image-container-4">
            <img src="/anjy.jpg" alt="" className="hero__image " />
          </div>
        </div>

        <h1 className="hero__title">
          <Word words="Mercy Jacob" />
        </h1>

        <div className="hero__subtitle-container flex-column">
          <p className="hero__subtitle poppins">
            <Text texts="Lorem ipsum dolo sit consectetur. Laoreet cursus enim laoreet arcu cursus ante." />
          </p>

          <Button label="Let's work" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
