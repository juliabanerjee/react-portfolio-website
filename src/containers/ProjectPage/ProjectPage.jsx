import "./ProjectPage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = () => {
  library.add(faAnglesLeft, faAnglesRight);
  return (
    <section className="project-page">
      <h2 className="project-page__h2">My Projects</h2>
      <div className="project-page__carousel">
        <FontAwesomeIcon icon={faAnglesLeft} className="project-page__carousel__arrow"/>
        <FontAwesomeIcon icon={faAnglesRight} className="project-page__carousel__arrow"/>
      </div>
    </section>
  );
};
export default ProjectPage;
