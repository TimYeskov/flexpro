import aboutImg from "../img/aboutImg.png";
import { useRef, useEffect } from "react";
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__wrapper">
        <div className="wrapper__image">
          <img src={aboutImg} alt="image" />
        </div>
        <div className="wrapper__text">
          <h2>About us</h2>
          <h4>
            <p>
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.{" "}
            </p>
            <p>
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
          </h4>
          <button>More on Our History</button>
        </div>
      </div>
    </section>
  );
};
export default About;
