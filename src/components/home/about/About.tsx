// components import
import Button from "@/components/ui/button/Button";
import Stat from "@/components/utils/stat/Stat";
import Text from "@/components/utils/text/Text";
// styled import
import "./about.css";

const About = () => {
  return (
    <section className="home-about section-container">
      <div className="home-about-container">
        <h2 className="home-about__heading section-heading">About</h2>

        <div className="home-about__content">
          <p className="home-about__text">
            <Text texts="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id semper arcu faucibus molestie congue ultrices scelerisque. Risus morbi aliquam eget lacus tempor. Auctor nisl montes eget donec cras." />
          </p>

          <div className="home-about__numbers-container flex">
            <Stat number="7+" firstText="years of" secondText="experience" />
            <Stat number="2" firstText="startups" secondText="founded" />
            <Stat number="$200K" firstText="grants" secondText="raised" />
          </div>

          <p className="home-about__text">
            <Text texts=" Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id semper arcu faucibus molestie congue ultrices scelerisque. Risus morbi aliquam eget lacus tempor. Auctor nisl montes eget donec cras." />
          </p>

          <Button label="Read more" />
        </div>
      </div>
    </section>
  );
};

export default About;
