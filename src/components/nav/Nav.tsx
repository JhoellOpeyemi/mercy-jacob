import { NavLink } from "react-router";

// utils import
import { links } from "@/utils";

// styles import
import "./nav.css";

interface NavProps {
  isNavOpen: boolean;
}

const Nav = ({ isNavOpen }: NavProps) => {
  return (
    <>
      {isNavOpen && (
        <nav className={`${isNavOpen ? "nav active" : "nav"}`}>
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.path} className="nav__item">
                <NavLink to={link.path} className="nav__link">
                  {link.label}
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
        </nav>
      )}
    </>
  );
};

export default Nav;
