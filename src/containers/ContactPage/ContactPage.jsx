import "./ContactPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  library.add(faLinkedin, faEnvelope, faFileDownload, faGithub);
  return (
    <section className="contact-page">
      <h2 className="contact-page__h2">Contact Details</h2>

      <div className="contact-page__container">
        <div className="contact-page__icons">
        <FontAwesomeIcon icon={faEnvelope} className="contact-page__icons"size="6x" />
        <FontAwesomeIcon icon={faLinkedin} className="contact-page__icons" size="6x"/>
        <FontAwesomeIcon icon={faGithub} className="contact-page__icons" size="6x"/>
        <FontAwesomeIcon icon={faFileDownload} className="contact-page__icons" size="6x"/>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
