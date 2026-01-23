// hooks import
import { useRef } from "react";
// components import
import Button from "@/components/ui/button/Button";
import Image from "@/components/utils/image/Image";
import Text from "@/components/utils/text/Text";
// styled import
import "./hero.css";
import Word from "@/components/utils/word/Word";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hero-container" ref={heroRef}>
      <main className="hero flex-column">
        <div className="hero__media">
          <Image src="/anjy.jpg" alt="alt" />
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
