// components import
import Text from "@/components/utils/text/Text";
import Word from "@/components/utils/word/Word";
// styles import
import "./process-card.css";

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard = ({ title, description }: ProcessCardProps) => {
  return (
    <li className="process__item">
      <h3 className="process__heading">
        <Word words={title} />
      </h3>
      <p className="process__desc">
        <Text texts={description} />
      </p>
    </li>
  );
};

export default ProcessCard;
