import "./ProjectPage.scss";
import TicketTracker from "../../assets/images/TicketTracker.png";
import Calculator from "../../assets/images/Calculator.png";
import EarthquakeApi from "../../assets/images/EarthquakeApi.png";

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
        <img src={TicketTracker} alt="" className="project-page__carousel__image"/>
        <img src={Calculator} alt="" className="project-page__carousel__image"/>
        <img src={EarthquakeApi} alt="" className="project-page__carousel__image"/>
        <FontAwesomeIcon icon={faAnglesRight} className="project-page__carousel__arrow"/>
      </div>
    </section>
  );
};
export default ProjectPage;
