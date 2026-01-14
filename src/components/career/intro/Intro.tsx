// components import
import Heading from "@/components/utils/heading/Heading";
// styles import
import "./intro.css";

const Intro = () => {
  return (
    <section className="career__intro-section">
      <Heading firstText="Career" secondText="Highlights" />

      <div className="career__intro-content">
        <div className="career__intro-image"></div>
        <p className="career__intro-text">
          Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget
          interdum at integer. Lacus tempor aenean eu lobortis varius a euismod
          porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id
        </p>
      </div>
    </section>
  );
};

export default Intro;
