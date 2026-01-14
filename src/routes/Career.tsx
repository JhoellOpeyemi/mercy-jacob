// components import
import MessageIcon from "@/components/ui/message-icon/MessageIcon";
import Intro from "@/components/career/intro/Intro";
import Highlights from "@/components/utils/highlights/Highlights";
// utils import
import { careerHighlights } from "@/utils";

const Career = () => {
  return (
    <main className="career page-container">
      <Intro />
      <MessageIcon />
      <Highlights highlightsArray={careerHighlights} />
    </main>
  );
};

export default Career;
