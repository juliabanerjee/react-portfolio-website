import "./ContactPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  library.add(faLinkedin, faEnvelope, faFileDownload, faGithub);
  return (
    <section className="contact-page">
      <h2>Contact Details</h2>

      <div className="contact__icons">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFileDownload} />
      </div>
    </section>
  );
};
export default ContactPage;
