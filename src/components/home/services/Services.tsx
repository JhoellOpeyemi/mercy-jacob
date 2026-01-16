// utils import
import { servicesList } from "@/utils";
// styles import
import "./services.css";

const Services = () => {
  return (
    <section className="home-services section-container">
      <h2 className="home-services__heading section-heading flex-between">
        <span>What &nbsp;</span>
        <span>I &nbsp;</span>
        <span>Do</span>
      </h2>

      <ul className="home-services__list">
        {servicesList.map((service) => (
          <li key={service.title} className="home-services__item">
            <h3 className="home-services__item-heading">
              {service.title}
            </h3>

            <p className="home-services__item-desc">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
