// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// utils import
import { brandsList } from "@/utils";
// styles import
import "./brands.css";
import Word from "@/components/utils/word/Word";
import { animateDesktopBrands, animateMobileBrands } from "./animations";

gsap.registerPlugin(useGSAP);

const Brands = () => {
  const brandsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      animateMobileBrands(brandsRef);
    });

    mm.add("(min-width: 769px)", () => {
      animateDesktopBrands(brandsRef);
    });
  });

  return (
    <section className="home-brands section-container" ref={brandsRef}>
      <h3 className="home-brands__heading subsection-heading">
        <Word words="Brands i've worked with" />
      </h3>

      <div className="home-brands__list-container">
        <ul className="home-brands__list">
          {brandsList.map((brand) => (
            <li key={brand} className="home-brands__item">
              {brand}
            </li>
          ))}
        </ul>
        <div className="home-brands__divider" />
      </div>
    </section>
  );
};

export default Brands;
