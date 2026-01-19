// components import
import QuoteIcon from "@/components/ui/quote-icon/QuoteIcon";
import Text from "@/components/utils/text/Text";
// utils import
import { testimonialsList } from "@/utils";
// styles import
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="home-testimonials section-container">
      <QuoteIcon />

      <h2 className="home-testimonials__heading section-heading">
        <span>What my</span>
        <span>Clients said:</span>
      </h2>

      <ul className="home-testimonials__list">
        {testimonialsList.map(({ testimonial, author }) => (
          <li key={author} className="home-testimonials__item">
            <blockquote className="home-testimonials__quote">
              <p>
                <Text texts={testimonial} />
              </p>
            </blockquote>

            <p className="home-testimonials__author"> — {author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
