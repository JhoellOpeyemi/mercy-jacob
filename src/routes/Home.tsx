// components import
import Hero from "@/components/home/hero/Hero";
import About from "@/components/home/about/About";
import Brands from "@/components/home/brands/Brands";
import Services from "@/components/home/services/Services";
import MessageIcon from "@/components/ui/message-icon/MessageIcon";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";

const Home = () => {
  return (
    <div className="home page-container">
      <Hero />
      <About />
      <MessageIcon />
      <Brands />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
