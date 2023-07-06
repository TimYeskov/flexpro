import "./styles/app.scss";
import logo from "./img/logo.png";
import backVector from "./img/backVector.svg";
import nextVector from "./img/nextVector.svg";
import reputation1 from "./img/reputation1.svg";
import reputation2 from "./img/reputation2.svg";
import aboutImg from "./img/aboutImg.png";

import services1 from "./img/services1.svg";
import services2 from "./img/services2.svg";
import services3 from "./img/services3.svg";
import services4 from "./img/services4.svg";
import services5 from "./img/services5.svg";
import services6 from "./img/services6.svg";

import exp1 from "./img/exp1.png";
import exp2 from "./img/exp2.png";
import exp3 from "./img/exp3.png";
import exp4 from "./img/exp4.png";

import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";

import fb from "./img/fbVector.png";
import ld from "./img/lnVector.png";
import twitter from "./img/twitterVector.png";
function App() {
  return (
    <div className="App">
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
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                About Us
              </a>
              <a class="nav-item nav-link" href="#">
                Projects
              </a>
              <a class="nav-item nav-link " href="#">
                Services
              </a>
              <a class="nav-item nav-link " href="#">
                Contact us
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="slider">
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
        </section>
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
        <section className="about">
          <div className="about__wrapper">
            <div className="wrapper__image">
              <img src={aboutImg} alt="image" />
            </div>
            <div className="wrapper__text">
              <h2>About us</h2>
              <h4>
                <p>
                  For more than 30 years we have been delivering world-class
                  construction and we’ve built many lasting relationships along
                  the way.{" "}
                </p>
                <p>
                  We’ve matured into an industry leader and trusted resource for
                  those seeking quality, innovation and reliability when
                  building in the U.S.
                </p>
              </h4>
              <button>More on Our History</button>
            </div>
          </div>
        </section>
        <section className="services">
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
        <section className="experience">
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
        <section className="projects">
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
        </section>
        <section className="feedback">
          <h2>What can us do for you?</h2>
          <h3>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </h3>
          <form>
            <input placeholder="Your Name" type="text" />
            <input placeholder="Email" type="emaiı" />

            <select>
              <option value="" disabled selected>
                Reason for Contacting*
              </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </select>
            <input placeholder="Phone" type="number" />
            <input placeholder="Message" type="text" id="message" />
            <button type="submit">Submit</button>
          </form>
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
