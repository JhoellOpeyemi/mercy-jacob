import { NavLink } from "react-router";
// utils import
import { links } from "@/utils";
// styles import
import "./desktop-nav.css";

const DesktopNav = () => {
  return (
    <nav className="desktop-nav playfair-display">
      <ul className="desktop-nav__list flex">
        {links.map((link) => (
          <li key={link.path} className="desktop-nav__item">
            <NavLink to={link.path} className="desktop-nav__link">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
