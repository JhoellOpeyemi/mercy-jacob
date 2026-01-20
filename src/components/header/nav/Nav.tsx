import { NavLink } from "react-router";
// utils import
import { links } from "@/utils";
// hooks import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@/hooks/useWindowSize";
// components import
import DesktopNav from "./desktop/DesktopNav";
// styles import
import "./nav.css";
import { useRef } from "react";
import { navAnimation } from "./animation";
import Text from "@/components/utils/text/Text";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface NavProps {
  isNavOpen: boolean;
  closeNav: () => void;
}

const Nav = ({ isNavOpen, closeNav }: NavProps) => {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width > 768;

  useGSAP(
    () => {
      navAnimation(isNavOpen);
    },
    { scope: mobileNavRef, dependencies: [isNavOpen] },
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
