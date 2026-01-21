// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@/hooks/useWindowSize";
// components import
import { NavLink } from "react-router";
import DesktopNav from "./desktop/DesktopNav";
// utils import
import { links } from "@/utils";
import { createNavTimeline, controlNavTimeline } from "./animation";
// styles import
import "./nav.css";
import Text from "@/components/utils/text/Text";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface NavProps {
  isNavOpen: boolean;
  numberOfClicks: number;
  closeNav: () => void;
}

const Nav = ({ isNavOpen, closeNav, numberOfClicks }: NavProps) => {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const navTlRef = useRef<gsap.core.Timeline | null>(null);
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width > 768;

  useGSAP(
    () => {
      const isOpen = numberOfClicks % 2 === 1;

      if (isOpen) {
        navTlRef.current = createNavTimeline();
      }

      controlNavTimeline(navTlRef.current, isOpen);
    },
    { scope: mobileNavRef, dependencies: [numberOfClicks] },
  );

  return (
    <>
      {isNavOpen && (
        <nav
          className={`${isNavOpen ? "nav active" : "nav"}`}
          ref={mobileNavRef}
        >
          <div className="nav__container">
            <ul className="nav__list">
              {links.map((link) => (
                <li key={link.path} className="nav__item">
                  <NavLink
                    to={link.path}
                    className="nav__link"
                    onClick={closeNav}
                  >
                    <Text texts={link.label} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul className="nav__socials-list flex">
              <li className="nav__socials-item">
                <a href="/" className="nav__socials-link inter">
                  LinkedIn
                </a>
              </li>
              <li className="nav__socials-item">
                <a href="/" className="nav__socials-link inter">
                  Twitter
                </a>
              </li>
              <li className="nav__socials-item">
                <a href="/" className="nav__socials-link inter">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {isDesktop && <DesktopNav />}
    </>
  );
};

export default Nav;
