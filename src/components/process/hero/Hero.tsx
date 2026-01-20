// components import
import Intro from "@/components/utils/intro/Intro";
import MessageIcon from "@/components/ui/message-icon/MessageIcon";

import "./hero.css";

const Hero = () => {
  return (
    <section className="process__hero">
      <Intro
        headingFirstText="My"
        headingSecondText="Process"
        introText="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper"
      />
      <MessageIcon />
    </section>
  );
};

export default Hero;
