// components import
import { NavLink } from "react-router";
// utils import
import { links } from "@/utils";
// styles import
import "./desktop-nav.css";

interface NavProps {
  closeNav: (
    path: string,
    page: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}

const DesktopNav = ({ closeNav }: NavProps) => {
  return (
    <nav className="desktop-nav playfair-display">
      <ul className="desktop-nav__list flex">
        {links.map((link) => (
          <li key={link.path} className="desktop-nav__item">
            {link.path.startsWith("/") ? (
              <NavLink
                to={link.path}
                className="desktop-nav__link"
                onClick={(e) => closeNav(link.path, link.label, e)}
              >
                {link.label}
              </NavLink>
            ) : (
              <button
                className="desktop-nav__link"
                onClick={() => closeNav(link.path, link.label)}
              >
                {link.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
