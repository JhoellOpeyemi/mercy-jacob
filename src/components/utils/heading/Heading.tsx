// styles import
import Word from "../word/Word";
import "./heading.css";

interface HeadingProps {
  firstText: string;
  secondText: string;
}

const Heading = ({ firstText, secondText }: HeadingProps) => {
  return (
    <h1 className="page-heading">
      <span className="playfair-display">
        <Word words={firstText} />
      </span>
      <br />
      <span>
        <Word words={secondText} />
      </span>
    </h1>
  );
};

export default Heading;
