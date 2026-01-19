// components import
import Intro from "@/components/utils/intro/Intro";
import MessageIcon from "@/components/ui/message-icon/MessageIcon";
import Highlights from "@/components/utils/highlights/Highlights";
// utils import
import { careerHighlights } from "@/utils";
// styles import
import "./career-content.css";

const CareerContent = () => {
  return (
    <section className="career-content__section section-container">
      <Intro
        headingFirstText="Career"
        headingSecondText="Highlights"
        introText="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id"
      />
      <MessageIcon />
      <Highlights highlightsArray={careerHighlights} />
    </section>
  );
};

export default CareerContent;
