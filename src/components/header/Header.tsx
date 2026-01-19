// hooks import
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// components import
import Nav from "./nav/Nav";
// styles import
import "./header.css";
import { headerAnimation } from "./animation";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useGSAP(
    () => {
      headerAnimation();
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className={`${
        isNavOpen
          ? "header active flex-between page-container"
          : "header flex-between page-container"
      }`}
    >
      <p className="header__logo playfair-display" aria-hidden="true">
        MJ
      </p>

      <Nav isNavOpen={isNavOpen} closeNav={closeNav} />

      <p className="header__time">10:44</p>

      <button
        className="header__menu flex-column"
        aria-label="Open Menu"
        onClick={handleNav}
      >
        <span className="header__menu-line"></span>
        <span className="header__menu-line"></span>
      </button>
    </header>
  );
};

export default Header;
