import './styles.scss';
import p1 from "./assets/bmates.png";
import p2 from "./assets/beamcalc2.png";
import p3 from "./assets/project2.png";
import resume from "./assets/Marsel_Fetlyaev_Resume.pdf";
import face from "./assets/face.jpg";
import "../node_modules/font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <div className="App">
      <div id="top"></div>

      <section id="hero" class="jumbotron">
        <div class="container">
          <h1 class="hero-title load-hidden">
            Hi, my name is <span class="text-color-main">Marsel Fetlyaev</span>
            <br />
            I'm a Software Developer.
          </h1>
          <p class="hero-cta load-hidden">
            <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about">More Info</a>
            <a rel="noreferrer" class="cta-btn cta-btn--hero" href="https://github.com/iammarsel" target="_blank">
              <i class="fa fa-github fa-inverse"></i>
            </a>
            <a rel="noreferrer" class="cta-btn cta-btn--hero" href="https://www.linkedin.com/in/marsel-fetlyaev-96bb871b7/" target="_blank">
              
              
              <i class="fa fa-linkedin fa-inverse"></i>
            </a>
          </p>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <h2 class="section-title load-hidden">About me</h2>
          <div class="row about-wrapper">
            <div class="col-md-6 col-sm-12">
              <div class="about-wrapper__image load-hidden">
                <img alt="Profile Image" class="img-fluid rounded shadow-lg" height="auto" width="300px"
                  src={face} />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="about-wrapper__info load-hidden">
                <p class="about-wrapper__info-text">
                  I am a Software Developer interested in improving and contributing to projects in Computer Science.
                </p>
                <p class="about-wrapper__info-text">
                  Currently looking for a SWE position and mastering Data Stuctures
                </p>
                <span class="d-flex mt-3">
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume"
                    href={resume}>
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div class="container">
          <div class="project-wrapper">
            <h2 class="section-title dark-blue-text">Projects</h2>

            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">Brilliant Mates</h3>
                  <div>
                    <p class="mb-4">
                      Two player chess game built with Python, includes notation system, flip board, load and save
                      positions, and puzzles
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
                    href="https://www.youtube.com/watch?v=xIhZmLKso14">
                    Video Demo
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/BrilliantMatesGame">
                    Source Code
                  </a>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt">
                      <img alt="Project Image" class="img-fluid" src={p1} />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">Beam Calculator</h3>
                  <div>
                    <p class="mb-4">
                      Engineering Beam Calculator used to calculate forces over the length of a beam, built in Python, using
                      Tkinter and Matplotlib libraries
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
                    href="https://www.youtube.com/watch?v=7PS2pJWuoHo">
                    Video Demo
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/BeamCalculator">
                    Source Code
                  </a>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt">
                      <img alt="Project Image" class="img-fluid" src={p2} />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">Networking Scripts</h3>
                  <div>
                    <p class="mb-4">
                      Python and YML scripts to get info from Cisco IOS switches
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="#!">
                    See Live
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/networking_scripts">
                    Source Code
                  </a>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="project-wrapper__image load-hidden">
                  <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                    class="thumbnail rounded js-tilt">
                    <img alt="Project Image" class="img-fluid" src={p3} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <h2 class="section-title">Contact</h2>
          <div class="contact-wrapper load-hidden">
            <p class="contact-wrapper__text">Email me at fetmarsel2002@gmail.com</p>
            <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume" href="mailto:example@email.com">Email
              now</a>
          </div>
        </div>
      </section>

      <footer class="footer navbar-static-bottom">
        <div class="container">
          <a rel="noreferrer" href="#top" class="back-to-top">
            <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div class="social-links">
            <a rel="noreferrer" href="https://www.linkedin.com/in/marsel-fetlyaev-96bb871b7/" target="_blank">
              <i class="fa fa-linkedin fa-inverse"></i>
            </a>
            <a rel="noreferrer" href="https://github.com/iammarsel" target="_blank">
              <i class="fa fa-github fa-inverse"></i>
            </a>
          </div>
          <hr />
        </div>
      </footer>
    </div>
  );
}

export default App;
