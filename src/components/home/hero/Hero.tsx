// components import
import Button from "@/components/ui/button/Button";
// styled import
import "./hero.css";

const Hero = () => {
  return (
    <div className='hero-container'>
        <main className="hero flex-column">
        <div className="hero__media"></div>

        <h1 className="hero__title"><span>I'm</span> Mercy Jacob</h1>

        <div className="hero__subtitle-container flex-column">
            <p className="hero__subtitle poppins">
                Lorem ipsum dolo sit consectetur.
                Laoreet cursus enim laoreet arcu cursus ante.
            </p>

            <Button label="Let's work" />
        </div>
        </main>
    </div>
  );
};

export default Hero;
