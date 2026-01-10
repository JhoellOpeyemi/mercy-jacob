// styles import
import "./input.css";

interface InputProps {
  label: string;
  id: string;
  type?: string;
}

const Input = ({ label, id, type }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input type={type} name={id} id={id} className="input" />
    </div>
  );
};

export default Input;
