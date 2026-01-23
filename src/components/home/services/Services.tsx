// utils import
import { servicesList } from "@/utils";
// components import
import Text from "@/components/utils/text/Text";
// styles import
import "./services.css";
import Word from "@/components/utils/word/Word";

const Services = () => {
  return (
    <section className="home-services section-container">
      <h2 className="home-services__heading section-heading">
        <Word words="What I Do" />
      </h2>

      <ul className="home-services__list">
        {servicesList.map((service) => (
          <li key={service.title} className="home-services__item">
            <h3 className="home-services__item-heading">
              <Word words={service.title} />
            </h3>

            <p className="home-services__item-desc">
              <Text texts={service.description} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
