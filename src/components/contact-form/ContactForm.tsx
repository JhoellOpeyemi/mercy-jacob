// components import
import Button from "@/components/ui/button/Button";
// styles import
import "./contact-form.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-form__input-group">
        <div className="contact-form__input-container flex-column">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="contact-form__input-container flex-column">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>

      <div className="contact-form__input-container flex-column">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <Button label="Send Message" type="submit" />
    </form>
  );
};

export default ContactForm;
