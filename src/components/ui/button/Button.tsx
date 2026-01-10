// styles import
import "./button.css";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClickFunc?: () => void;
}

const Button = ({ label, type, onClickFunc }: ButtonProps) => {
  return (
    <button type={type} className="ui-button inter" onClick={onClickFunc}>
      {label}
    </button>
  );
};

export default Button;
