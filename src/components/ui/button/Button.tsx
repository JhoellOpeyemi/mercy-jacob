// styles import
import "./button.css";

interface ButtonProps {
  label: string;
  onClickFunc?: () => void;
}

const Button = ({ label, onClickFunc }: ButtonProps) => {
  return (
    <button className="ui-button inter" onClick={onClickFunc}>
      {label}
    </button>
  );
};

export default Button;
