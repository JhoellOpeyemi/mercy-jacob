// utils import
import { links } from "@/utils";
// components import
import Contact from "@/components/contact/Contact";
// styles import
import "./footer.css";

const Footer = () => {
  return (
    <>
        <Contact />

        <footer className="footer">
            <div className="footer__content page-container">
                <div className="footer__content-inner flex-between">
                    <div className="footer__content-image-container"></div>

                    <div className="footer__desktop-socials">
                    <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    LinkedIn
                    </a>
                    <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    Instagram
                    </a>
                    <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    Twitter
                    </a>
                    </div>

                    <ul className="footer__content-links flex-column">
                    {links.map(({ path, label }: { path: string; label: string }) => (
                    <li key={path} className="footer__content-link-item">
                        <a href={path} className="footer__content-link">
                        {label}
                        </a>
                    </li>
                    ))}
                    </ul>
                </div>

                <div className="footer__mobile-socials">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        Instagram
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        Twitter
                    </a>
                </div>

                <div className="footer__brand-copyright">
                    <div className="footer__brand">
                        <h2 className="footer__brand-name playfair-display">Mercy Jacob</h2>
                    </div>
                    <p className='footer__copyright'>
                        &copy; {new Date().getFullYear()} Mercy Jacob. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
