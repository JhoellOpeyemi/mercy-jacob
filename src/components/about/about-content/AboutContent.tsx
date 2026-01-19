// components import
import Stat from "@/components/utils/stat/Stat";
import Heading from "@/components/utils/heading/Heading";
import Image from "@/components/utils/image/Image";

// styles import
import "./about-content.css";
import Text from "@/components/utils/text/Text";

const AboutContent = () => {
  return (
    <main className="about-content">
      <Heading firstText="About" secondText="Mercy Jacobs" />

      <div className="about-content__container flex-column">
        <div className="about-content__intro">
          <div className="about-content__intro-image">
            <Image src="/public/anjy.jpg" alt="alt" />
          </div>
          <div className="about-content__intro-texts">
            <p>
              <Text texts="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id semper arcu faucibus molestie congue ultrices scelerisque. Risus morbi aliquam eget lacus tempor. Auctor nisl montes eget donec cras." />
            </p>

            <p>
              <Text texts="Lorem ipsum dolor sit amet consectetur. Facilisi risu volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id semper arcu faucibus" />
            </p>
          </div>
        </div>

        <div className="about-content__stats">
          <div className="about-content__stats-group">
            <div className="about-content__stat-container">
              <Stat number="7+" firstText="years of" secondText="experience" />
              <Stat number="2" firstText="startups" secondText="founded" />
            </div>
            <div className="stat-container-divider" />
            <div className="about-content__stat-container">
              <Stat number="$200K" firstText="grants" secondText="raised" />
              <Stat number="20+" firstText="live" secondText="products" />
            </div>
          </div>
        </div>

        <div className="about-content__outro">
          <p>
            <Text texts="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius" />
          </p>
          <p>
            <Text texts="Lorem ipsum dolor sit amet consectetur. Facilisi risus volutpat eget interdum at integer. Lacus tempor aenean eu lobortis varius a euismod porttitor ut. Nibh et ullamcorper commodo fringilla. Viverra et id semper arcu faucibus molestie congue ultrices scelerisque. Risus morbi aliquam eget lacus tempor. Auctor nisl montes eget donec cras." />
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutContent;
