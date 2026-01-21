// hooks import
import { useRef, useState, useEffect } from "react";
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
  const [numberOfClicks, setNumberOfClicks] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  const handleNav = () => {
    const newClickCount = numberOfClicks + 1;
    setNumberOfClicks(newClickCount);
    setIsNavOpen(true);

    if (newClickCount % 2 === 0) {
      setTimeout(() => {
        setIsNavOpen(false);
      }, 1800);
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setNumberOfClicks(0);
  };

  useEffect(() => {
    const getCurrentTime = (): string => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const time = `${hours}:${minutes}`;
      setCurrentTime(time);
      return time;
    };

    getCurrentTime();

    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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

      <Nav
        isNavOpen={isNavOpen}
        closeNav={closeNav}
        numberOfClicks={numberOfClicks}
      />

      <p className="header__time">{currentTime}</p>

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
