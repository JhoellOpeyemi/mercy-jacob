// components import
import ContactForm from "@/components/contact-form/ContactForm";
import Word from "@/components/utils/word/Word";
import Text from "@/components/utils/text/Text";
// styles import
import "./contact.css";

const Contact = () => {
  return (
    <div className="page-container" id="contact">
      <section className="contact section-container">
        <div className="contact__intro flex-column">
          <h2 className="contact__heading playfair-display">
            <Word words="Want to work with me?" />
          </h2>
          <p className="contact__description">
            <Text texts="Feel free to leave a message via the form or drop me a mail at" />

            <a
              href="mailto:contact@mercyjacob.com"
              className="contact__email-link"
              target="_blank"
              rel="noreferrer"
            >
              <Text texts="contact@mercyjacob.com" />
            </a>
          </p>
        </div>

        <div className="contact__form-container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
