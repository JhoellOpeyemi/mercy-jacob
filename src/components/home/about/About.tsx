// components import
import Button from "@/components/ui/button/Button";
// styled import
import "./about.css";

const About = () => {
  return (
    <section className="home-about section-container">
      <h2 className="home-about__heading section-heading">About</h2>

      <div className="home-about__content">
        <p className="home-about__text">
          Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget
          interdum at integer. Lacus tempor aenean
        </p>

        <div className="home-about__numbers-container flex">
          <p className="home-about__number flex-column">
            <span>7+</span>
            <span>
              years of <br /> experience
            </span>
          </p>
          <p className="home-about__number flex-column">
            <span>2</span>
            <span>
              startups <br /> founded
            </span>
          </p>
          <p className="home-about__number flex-column">
            <span>$200K</span>
            <span>
              grants <br /> raised
            </span>
          </p>
        </div>

        <p className="home-about__text">
          Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget
          interdum at integer. Lacus tempor aenean eu lobortis varius a euismod
          porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id
          semper arcu faucibus molestie congue ultrices scelerisque. Risus morbi
          aliquam eget lacus tempor. Auctor nisl montes eget donec cras.
        </p>
      </div>

      <Button label="Read more" />
    </section>
  );
};

export default About;
