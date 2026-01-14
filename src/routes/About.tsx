// components import
import AboutContent from '@/components/about/about-content/AboutContent'
import Career from '@/components/about/career/Career'
import Gallery from '@/components/about/gallery/Gallery'

const About = () => {
  return (
    <div className="about page-container">
      <AboutContent />
      <Career />
      <Gallery />
    </div>
  );
};

export default About;
