import logo from "../img/logo.png";
import "../styles/app.scss";

const Header = () => {
  const scrollToSection = (sectionId, duration) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navLink = document.querySelector(`[data-section="${sectionId}"]`);
      const offset = parseInt(navLink.getAttribute("data-offset")) || 0;
      const targetPosition = section.offsetTop - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentPosition = startPosition + distance * progress;
        window.scrollTo(0, currentPosition);

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          // Скролл завершен, выделяем активную ссылку
          highlightNavLink(sectionId);
        }
      };

      requestAnimationFrame(animateScroll);
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

  // Обработчик события scroll
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

    if (currentSectionId) {
      highlightNavLink(currentSectionId);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <header>
      {/* <div className="container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-item nav-link"
              onClick={() => scrollToSection("about", 800)}
              data-section="about"
              data-offset="-60"
            >
              About Us
            </a>
            <a
              class="nav-item nav-link"
              onClick={() => scrollToSection("brands", 800)}
              data-section="brands"
              data-offset="200"
            >
              Brands
            </a>
            <a
              class="nav-item nav-link "
              onClick={() => scrollToSection("services", 800)}
              data-section="services"
              data-offset="50"
            >
              Services
            </a>
            <a
              class="nav-item nav-link "
              onClick={() => scrollToSection("experience", 800)}
              data-section="experience"
              data-offset="50"
            >
              Experience
            </a>
            <a
              class="nav-item nav-link"
              onClick={() => scrollToSection("projects", 800)}
              data-section="projects"
              data-offset="-30"
            >
              Projects
            </a>

            <a
              class="nav-item nav-link "
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
