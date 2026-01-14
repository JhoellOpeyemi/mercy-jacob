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

const Button = ({ label, type, onClickFunc, link, path }: ButtonProps) => {
  return (
    <>
        {!link ? (
            <button type={type} className="ui-button inter" onClick={onClickFunc}>
            {label}
            </button>
            ): (
                <Link to={path} className="ui-button inter">{label}</Link>
            )
        }
    </>
  );
};

export default Button;
