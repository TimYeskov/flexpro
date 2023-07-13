import logo from "../img/logo.png";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [currentSectionId, setCurrentSectionId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = null;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          currentSectionId = section.getAttribute("id");
          break;
        }
      }

      setCurrentSectionId(currentSectionId);
    };

    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledScrollHandler = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []);

  const scrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: -offset,
      });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={`nav-item nav-link ${
                currentSectionId === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection("about", 60)}
            >
              About Us
            </a>
            <a
              className={`nav-item nav-link ${
                currentSectionId === "brands" ? "active" : ""
              }`}
              onClick={() => scrollToSection("brands", 200)}
            >
              Brands
            </a>
            <a
              className={`nav-item nav-link ${
                currentSectionId === "services" ? "active" : ""
              }`}
              onClick={() => scrollToSection("services", 50)}
            >
              Services
            </a>
            <a
              className={`nav-item nav-link ${
                currentSectionId === "experience" ? "active" : ""
              }`}
              onClick={() => scrollToSection("experience", 50)}
            >
              Experience
            </a>
            <a
              className={`nav-item nav-link ${
                currentSectionId === "projects" ? "active" : ""
              }`}
              onClick={() => scrollToSection("projects", 30)}
            >
              Projects
            </a>
            <a
              className={`nav-item nav-link ${
                currentSectionId === "feedback" ? "active" : ""
              }`}
              onClick={() => scrollToSection("feedback", 50)}
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
