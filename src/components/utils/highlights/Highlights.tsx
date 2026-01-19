// styles import
import Text from "../text/Text";
import "./highlights.css";

export interface HighlightsType {
  year: number;
  highlights: string[];
}

interface HighlightProps {
  highlightsArray: HighlightsType[];
}

const Highlights = ({ highlightsArray }: HighlightProps) => {
  return (
    <section className="highlights-section">
      <div className="highlights-section__content">
        <div className="highlights-section__year-sidebar flex-column">
          {highlightsArray.map(({ year }) => (
            <p key={year} className="highlights-section__year playfair-display">
              {year}
            </p>
          ))}
        </div>

        <div className="highlights-section__content-inner flex-column">
          {highlightsArray.map(({ year, highlights }) => (
            <div className="highlights-section__-year-group" key={year}>
              <ul className="highlights-section__list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="highlights-section__item">
                    <Text texts={highlight} />
                  </li>
                ))}
              </ul>

              <h4 className="highlights-section__year-heading playfair-display">
                {year}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
