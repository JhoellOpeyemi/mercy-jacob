// utils import
import { brandsList } from "@/utils";
// styles import
import "./brands.css";

const Brands = () => {
  return (
    <section className="home-brands section-container">
      <h3 className="home-brands__heading subsection-heading">
        Brands i've worked with
      </h3>

      <ul className="home-brands__list">
        {brandsList.map((brand) => (
          <li key={brand} className="home-brands__item">
            {brand}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
