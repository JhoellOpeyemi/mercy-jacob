// hooks import
import { useState } from "react";

// components import
import Nav from "./nav/Nav";
// styles import
import "./header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header
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
