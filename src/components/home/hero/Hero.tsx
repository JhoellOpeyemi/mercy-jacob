// components import
import Button from "@/components/ui/button/Button";
// styled import
import "./hero.css";

const Hero = () => {
  return (
    <main className="hero flex-column">
      <div className="hero__media"></div>

      <h1 className="hero__title">I'm Mercy Jacob</h1>

      <div className="hero__subtitle-container flex-column">
        <p className="hero__subtitle poppins">
          Lorem ipsum dolor sit amet consectetur. Laoreet
        </p>

        <Button label="Let's work" />
      </div>
    </main>
  );
};

export default Hero;
