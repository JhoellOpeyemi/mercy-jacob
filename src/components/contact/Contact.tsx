// components import
import ContactForm from "@/components/contact-form/ContactForm";
// styles import
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section-container" id="contact">
      <div className="contact__intro flex-column">
        <h2 className="contact__heading playfair-display">
          Want to work with me?
        </h2>
        <p className="contact__description">
          Feel free to leave a message via the form or drop me a mail at{" "}
          <a
            href="mailto:contact@mercyjacob.com"
            className="contact__email-link"
            target="_blank"
            rel="noreferrer"
          >
            contact@mercyjacob.com
          </a>
        </p>
      </div>

      <div className="contact__form-container">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
