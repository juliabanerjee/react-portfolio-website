import "./ExperiencePage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faGithub,
  faJava,
  faJsSquare,
  faNpm,
  faReact,
  faCss3,
  faSass
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const ExperiencePage = () => {
  library.add(
    faJava,
    faJsSquare,
    faNpm,
    faReact,
    faHtml5,
    faGithub,
    faCss3,
    faDatabase,
    faSass
  );
  return (
    <section className="experience-page">
      <h2 className="experience-page__h2">Experience</h2>
      <div className="experience-page__text-container">
      <p className="experience-page__p">
        I have recently completed _nology's 12 week intensive Software Developer
        course. During this course, I learned both front-end and back-end
        development. The front-end side of the course focused on <span className="highlight-text">JavaScript</span> and 
        <span className="highlight-text"> React</span>. On the back-end side, I studied <span className="highlight-text">Java, APIs,
        Spring Boot and Google Cloud Platform</span>. Having thoroughly enjoyed the
        variation on the topics on this course, I am now seeking a <span className="highlight-text">fullstack
        junior developer position</span>. 
      </p>
      <p>Below is the tech stack that I've been working with:</p>
      </div>
      <div className="experience-page__container">
        <FontAwesomeIcon icon={faHtml5} size="6x"/>
        <FontAwesomeIcon icon={faCss3} size="6x"/>
        <FontAwesomeIcon icon={faSass} size="6x"/>
        <FontAwesomeIcon icon={faJsSquare} size="6x"/>
        <FontAwesomeIcon icon={faReact} size="6x"/>
        <FontAwesomeIcon icon={faJava} size="6x"/>
        <FontAwesomeIcon icon={faDatabase} size="6x"/>
        <FontAwesomeIcon icon={faGithub} size="6x"/>
        <FontAwesomeIcon icon={faNpm} size="6x"/>

      </div>
    </section>
  );
};
export default ExperiencePage;
