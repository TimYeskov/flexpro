import logo from "../img/logo.png";
import React, { useEffect } from "react";

const Header = () => {
  const scrollToSection = (sectionId, duration) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navLink = document.querySelector(`[data-section="${sectionId}"]`);
      const offset = parseInt(navLink.getAttribute("data-offset")) || 0;
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const highlightNavLink = (sectionId) => {
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i];
      if (navLink.getAttribute("data-section") === sectionId) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          highlightNavLink(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
              className="nav-item nav-link"
              onClick={() => scrollToSection("about", 800)}
              data-section="about"
              data-offset="-60"
            >
              About Us
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => scrollToSection("brands", 800)}
              data-section="brands"
              data-offset="200"
            >
              Brands
            </a>
            <a
              className="nav-item nav-link "
              onClick={() => scrollToSection("services", 800)}
              data-section="services"
              data-offset="50"
            >
              Services
            </a>
            <a
              className="nav-item nav-link "
              onClick={() => scrollToSection("experience", 800)}
              data-section="experience"
              data-offset="50"
            >
              Experience
            </a>
            <a
              className="nav-item nav-link"
              onClick={() => scrollToSection("projects", 800)}
              data-section="projects"
              data-offset="-30"
            >
              Projects
            </a>
            <a
              className="nav-item nav-link "
              onClick={() => scrollToSection("feedback", 800)}
              data-section="feedback"
              data-offset="50"
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
