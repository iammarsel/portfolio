import './styles.scss';
import p1 from "./assets/bmates.png";
import p2 from "./assets/beamcalc2.png";
import p3 from "./assets/levelup.png";
import p4 from "./assets/recipelab.png";
import fin from "./assets/financify-thumbnail.png";
import resume from "./assets/Marsel_Fetlyaev_Resume.pdf";
import face from "./assets/fetlyaev.png";
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
            <a rel="noreferrer" class="cta-btn cta-btn--hero" href="https://www.linkedin.com/in/marsel-fetlyaev/" target="_blank">


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
                  I am a third year Computer Science student at University of South Florida looking for an internship in Software Development, Front End Web Development, and Computer Networking.
                </p>
                <p class="about-wrapper__info-text">
                  I am most experienced with  <b>Python</b> and have made several projects with it, including a two player chess game and an engineering beam calculator.
                </p>

                <p class="about-wrapper__info-text">
                  I am also experienced in <b>JavaScript</b> web development, primarily working with React JS and React Native, creating personal projects, such as this portfolio and others you can check out below!
                </p>

                <p class="about-wrapper__info-text">
                  I also have worked with AWS cloud service and recently became certified as <b>AWS Certified Cloud Practitioner</b>. 
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
                  <h2>Technologies Used: Python, SQLite, pygame, tkinter</h2>
                  <hr class="dotted"></hr>
                  <div>
                    <p class="mb-4">
                      <li>Developed a two-player chess game in Python to allow players to analyze and review chess games</li>
                      <li>Utilized pygame, tkinter, and pyexe for a full downloadable game with GUI and two player interaction</li>
                      <li>Followed an Object-Oriented design for chess piece creation and modification with classes and functions</li>
                      <li>Created a puzzle system using an SQLite database for storing and retrieving game scenarios</li>
                    </p>
                    
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
                    href="https://www.youtube.com/watch?v=xIhZmLKso14">
                    Video Demo
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/brilliant-mates">
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
                  <h3 class="project-wrapper__text-title">Financify</h3>
                  <h2>Technologies Used: React.js, AWS RDS with MySQL, Axios, Express, NodeJS</h2>
                  <hr class="dotted"></hr>
                  <div>
                    <p class="mb-4">
                      <li>Developing a personal finance website using React to enhance financial tracking of income and expenses for
users, resulting in a 30% decrease of time spent accounting and a 40% reduction in unnecessary expenses</li>
                      <li>Integrating a RESTful API with Axios, NodeJS, and Express, connecting the users’ entry database to each
client, resulting in an organized finance structure for analysis and improvement</li>
                      <li>Designing the user interface and experience with Tailwind CSS, resulting in a visually appealing and user-
friendly interface, boosting engagement and satisfaction by 40%.</li>
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/finance-app">
                    Source Code
                  </a>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt">
                      <img alt="Project Image" class="img-fluid" src={fin} />
                    </div>
                  </a>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">Recipe Lab</h3>
                  <h2>Technologies Used: JavaScript, React Native, Google Vision</h2>
                  <hr class="dotted"></hr>
                  <div>
                    <p class="mb-4">
                      <li>Developed a Recipe suggestion mobile application in React Native that allows users to find recipes quickly based on the ingredients they have in the fridge</li>
                      <li>Collaborated with talented peers at the SHPE hackathon called Hackabull, successfully completing the workload in only 24 hours</li>
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="https://youtube.com/shorts/o4h6oJKVBhI?feature=share">
                    Video Demo
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/recipe-lab">
                    Source Code
                  </a>
                </div>
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="project-wrapper__image load-hidden">
                  <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                    class="thumbnail rounded js-tilt">
                    <img alt="Project Image" class="img-fluid" src={p4} />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">LevelUP Fitness</h3>
                  <h2>Technologies Used: JavaScript, React Native, Firebase</h2>
                  <hr class="dotted"></hr>
                  <div>
                    <p class="mb-4">
                      <li>Used React Native for a personalized survey application that works on iOS, Android, and PC to give users a
platform to track their fitness progression and gain knowledge on body health</li>
                      <li>Implemented user authentication with a noSQL database solution from Firebase to store user fitness data</li>
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="#!">
                    See Live
                  </a>
                  <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                    href="https://github.com/iammarsel/level-up">
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

            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">Beam Calculator</h3>
                  <h2>Technologies Used: Python, matplotlib, tkinter</h2>
                  <hr class="dotted"></hr>
                  <div>
                    <p class="mb-4">
                      <li>Developed an engineering beam calculator in Python to display graphical representations of forced applied to
areas of the beam, to be able to visualize force distribution and adjust the beam properties when needed</li>
                      <li>Managed the development team by distributing the workload and publishing new features using Git workflow</li>
                      <li>Utilized matplotlib and tkinter libraries for multiple graphs of information and purposeful UI and UX</li>
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

          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <h2 class="section-title">Contact</h2>
          <div class="contact-wrapper load-hidden">
            <p class="contact-wrapper__text">Email me at marsel.fetlyaev@gmail.com</p>
            <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume" href="mailto:marsel.fetlyaev@email.com">Email now</a>
          </div>
        </div>
      </section>

      <footer class="footer navbar-static-bottom">
        <div class="container">
          <a rel="noreferrer" href="#top" class="back-to-top">
            <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div class="social-links">
            <a rel="noreferrer" href="https://www.linkedin.com/in/marsel-fetlyaev/" target="_blank">
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
