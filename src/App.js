import "./styles/app.scss";

import logo from "./img/logo.png";

import reputation1 from "./img/reputation1.svg";
import reputation2 from "./img/reputation2.svg";

import services1 from "./img/services1.svg";
import services2 from "./img/services2.svg";
import services3 from "./img/services3.svg";
import services4 from "./img/services4.svg";
import services5 from "./img/services5.svg";
import services6 from "./img/services6.svg";

import fb from "./img/fbVector.png";
import ld from "./img/lnVector.png";
import twitter from "./img/twitterVector.png";
import ProjectsSlider from "./components/ProjectsSlider";
import BannerSlider from "./components/BannerSlider";
import BrendSlider from "./components/BrendSlider";
import FeedBack from "./components/Feedback";
import Header from "./components/Header";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* <section className="slider">
          <h1>Building things is our mission.</h1>
          <div className="slider__projects">
            <h3>Feature Projects</h3>
            <h4>The National University of Architecture</h4>
            <div className="buttons">
              <button>
                <img src={backVector} />
                <h4> Back</h4>
              </button>
              <button>
                <h4> Next</h4>

                <img src={nextVector} />
              </button>
            </div>
          </div>
        </section> */}
        <BannerSlider />
        <section className="reputation">
          <h2>Our Reputation</h2>
          <div className="reputation__wrapper">
            <div className="wrapper__block">
              <img src={reputation1} alt="icon" />
              <h3>Best Services</h3>
              <h4>
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </h4>
            </div>
            <div className="wrapper__block">
              <img src={reputation2} alt="icon" />
              <h3>Best Teams</h3>
              <h4>Cursus semper tellus volutpat aliquet lacus. </h4>
            </div>
            <div className="wrapper__block">
              <img src={reputation2} alt="icon" />
              <h3>Best Designs</h3>
              <h4>Ultricies at ipsum nunc, tristique nam lectus.</h4>
            </div>
          </div>
        </section>
        <About />
        <section className="brand" id="brands">
          <BrendSlider />
        </section>

        <section className="services" id="services">
          <h2>Services</h2>

          <div className="services__wrapper">
            <div className="wrapper__block">
              <img src={services1} alt="icon" />
              <h4>Construction</h4>
            </div>
            <div className="wrapper__block">
              <img src={services2} alt="icon" />
              <h4>Renovation</h4>
            </div>
            <div className="wrapper__block">
              <img src={services3} alt="icon" />
              <h4>Consultation</h4>
            </div>

            <div className="wrapper__block">
              <img src={services4} alt="icon" />
              <h4>Repair Services</h4>
            </div>
            <div className="wrapper__block">
              <img src={services5} alt="icon" />
              <h4>Architecture</h4>
            </div>
            <div className="wrapper__block">
              <img src={services6} alt="icon" />
              <h4>Electric</h4>
            </div>
          </div>
        </section>
        <section className="experience" id="experience">
          <div className="experience__left">
            <div className="left__1">
              <div className="left__block">
                {/* <img src={exp1} alt="icon" /> */}

                <h3>112</h3>
                <h4>Projects Completed</h4>
              </div>
              <div className="left__block">
                {/* <img src={exp2} alt="icon" /> */}

                <h3>112</h3>
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="left__2">
              <div className="left__block">
                {/* <img src={exp3} alt="icon" /> */}

                <h3>112</h3>
                <h4>Years in Business</h4>
              </div>
              <div className="left__block">
                {/* <img src={exp4} alt="icon" /> */}

                <h3>112</h3>
                <h4>Awards Won</h4>
              </div>
            </div>
          </div>
          <div className="experience__right">
            <h2>30 Years Experience</h2>
            <h4>
              Our company has been the leading provided construction services to
              clients throughout the USA since 1988.
            </h4>
            <button>Contact Us</button>
          </div>
        </section>
        <section className="consultation">
          <div className="consultation__text">
            <h3>Free consultation with exceptional quality</h3>
            <h4>Just one call away: +84 1102 2703</h4>
          </div>
          <button>Get your consultation</button>
        </section>

        {/* <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="projects__wrapper">
            <div className="projects__left">
              <h3>All</h3>
              <h3>Commercial</h3>
              <h3>Residential</h3>
              <h3>Other</h3>
            </div>
            <div className="projects__right">
              <div className="right__container">
                <div className="container__1">
                  <div className="container__block">
                    <img src={project1} alt="project" />
                    <div className="block__text">
                      <h3>Wildstone Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project2} alt="project" />
                    <div className="block__text">
                      <h3>Wildstone Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
                <div className="container__2">
                  <div className="container__block">
                    <img src={project3} alt="project" />
                    <div className="block__text">
                      <h3>Wildstone Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project4} alt="project" />
                    <div className="block__text">
                      <h3>Wildstone Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right__buttons">
                <button>
                  <img src={backVector} />
                  <h4>Back</h4>
                </button>
                <button>
                  <h4>Next</h4>
                  <img src={nextVector} />
                </button>
              </div>
            </div>
          </div>
        </section> */}
        <section id="projects" className="projects">
          <ProjectsSlider />
        </section>

        <section className="feedback" id="feedback">
          <h2>What can us do for you?</h2>
          <h3>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </h3>
          <FeedBack />
        </section>
      </main>
      <footer>
        <div className="footer__container">
          <div className="footer__left">
            <h4>
              <span>Adress:</span>6391 Elgin St. Celina, Delaware 10299
            </h4>
            <h4>
              <span>Phone:</span>+84 1102 2703
            </h4>
            <h4>
              <span>Email:</span>hello@thebox.com
            </h4>
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__right">
            <h4>Newsletter:</h4>
            <form>
              <input type="mail" placeholder="Your email here" id="subscribe" />
              <button type="submit"> Subscribe</button>
            </form>
            <h4 className="right__social">Social:</h4>
            <img src={fb} alt="icon" />
            <img src={ld} alt="icon" />
            <img src={twitter} alt="icon" />
          </div>
        </div>
        <div className="footer__rights">
          <h4>TheBox Company © 2022. All Rights Reserved</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
