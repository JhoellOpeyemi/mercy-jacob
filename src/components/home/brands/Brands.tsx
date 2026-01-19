// utils import
import { brandsList } from "@/utils";
// styles import
import "./brands.css";
import Word from "@/components/utils/word/Word";

const Brands = () => {
  return (
    <section className="home-brands section-container">
      <h3 className="home-brands__heading subsection-heading">
        <Word words="Brands i've worked with" />
      </h3>

      <div className="home-brands__list-container">
        <ul className="home-brands__list">
          {brandsList.map((brand) => (
            <li key={brand} className="home-brands__item">
              {brand}
            </li>
          ))}
        </ul>
        <div className="home-brands__divider" />
      </div>
    </section>
  );
};

export default Brands;
