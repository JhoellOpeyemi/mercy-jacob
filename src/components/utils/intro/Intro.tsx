// components import
import Heading from "@/components/utils/heading/Heading";
// styles import
import "./intro.css";

interface IntroProps {
    headingFirstText: string,
    headingSecondText: string,
    introText: string
}

const Intro = ({headingFirstText, headingSecondText, introText}: IntroProps) => {
  return (
    <section className="intro-section">
      <Heading firstText={headingFirstText} secondText={headingSecondText} />

      <div className="intro-content">
        <div className="intro-image"></div>
        <p className="intro-text">
         {introText}
        </p>
      </div>
    </section>
  );
};

export default Intro;
