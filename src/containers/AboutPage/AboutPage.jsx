import "./AboutPage.scss";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpeg";

const AboutPage = () => {
  return (
    <>
      <section className="about-page">
        <h2 className="about-page__h2">About Me</h2>
        <img src={ProfilePhoto} alt="me" className="about-page__image" />
        <div className="about-page__text-container">
          <p className="about-page__p">
            Originally, my background is in modern languages, having graduated
            with a
            <span className="about-page__text-highlight"> 2:1 degree in French, German and Russian from the University of
              Birmingham
            </span>
            . On finishing my degree, I realised that I wanted to further
            broaden my horizons and gain skills outside of my languages. My
            degree finished in 2020, during the pandemic, which resulted in me
            working mainly within healthcare, more specifically COVID testing.
            During my previous positions, I was often working on software that
            was designed for the organisation's specific purpose. This meant I
            was often in contact with development teams about how to enhance the
            user experience. I enjoyed thinking about the usability of the
            software and helping to improve it. However, the longer I worked
            with the development team, the more I questioned how they were
            implementing my changes and the difficulty of this. This lead me to
            research software development and it's how I ended up on _nology's{" "}
            <span className="about-page__text-highlight">
              <a
                className="about-page__link"
                href="https://nology.io/12-week-software-developer-course/"
              >
                Software Developer Course
              </a>
            </span>
            .
          </p>
          <p className="about-page__p">
            Throughout the course, I have been challenged and tested far beyond
            what I have experienced before. However, I have found the whole
            experience to be incredibly thrilling and so rewarding. Personally,
            I am a very{" "}
            <span className="about-page__text-highlight">
              logical, competitive and hard-working
            </span>{" "}
            person who relishes a challenge. My experience on my course, both
            learning and working on my{" "}
            <span className="about-page__text-highlight">
              first client project
            </span>
            , has shown me that a career in software development.
          </p>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
