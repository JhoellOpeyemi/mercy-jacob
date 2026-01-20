// components import
import Heading from "@/components/utils/heading/Heading";
import Image from "../image/Image";
import Text from "../text/Text";
// styles import
import "./intro.css";

interface IntroProps {
  headingFirstText: string;
  headingSecondText: string;
  introText: string;
}

const Intro = ({
  headingFirstText,
  headingSecondText,
  introText,
}: IntroProps) => {
  return (
    <section className="intro-section">
      <Heading firstText={headingFirstText} secondText={headingSecondText} />

      <div className="intro-content">
        <div className="intro-image">
          <Image src="/anjy.jpg" alt="alt" />
        </div>
        <p className="intro-text">
          <Text texts={introText} />
        </p>
      </div>
    </section>
  );
};

export default Intro;
