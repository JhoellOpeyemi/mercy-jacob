// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// utils import
import { easeEntrance } from "@/utils";
// components import
import { Link } from "react-router";
// styles import
import "./button.css";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClickFunc?: () => void;
  link?: boolean;
  path?: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Button = ({ label, type, onClickFunc, link, path }: ButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".ui-button__overlay", {
        scaleX: 1,
        duration: 0.5,
        ease: easeEntrance,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: buttonRef },
  );

  return (
    <div className="ui-button__container" ref={buttonRef}>
      {!link ? (
        <button type={type} className="ui-button inter" onClick={onClickFunc}>
          {label}
          <span className="ui-button__overlay" />
        </button>
      ) : (
        <Link to={path!} className="ui-button inter">
          {label}
          <span className="ui-button__overlay" />
        </Link>
      )}
    </div>
  );
};

export default Button;
