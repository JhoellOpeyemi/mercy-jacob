// utils import
import { careerHighlights } from "@/utils";
import Highlights from "@/components/utils/highlights/Highlights";
// components import
import Button from "@/components/ui/button/Button";
// styles import
import "./career.css";

const Career = () => {
  const shortCareerHighlights = careerHighlights.slice(0, 3);

  return (
    <section className="about-career__section section-container">
      <h2 className="about-career__heading section-heading">Career</h2>

      <Highlights highlightsArray={shortCareerHighlights} />

      <div className="about-career__button">
        <Button path="/career" label="View Career Highlights" link={true} />
      </div>
    </section>
  );
};

export default Career;
