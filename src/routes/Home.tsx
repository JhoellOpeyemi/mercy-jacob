// components import
import Hero from "@/components/home/hero/Hero";
import About from "@/components/home/about/About";
import Brands from "@/components/home/brands/Brands";
import Services from "@/components/home/services/Services";
import MessageIcon from "@/components/ui/message-icon/MessageIcon";
import Testimonials from "@/components/home/testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home page-container">
      <Hero />
      <MessageIcon />
      <About />
      <Brands />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
