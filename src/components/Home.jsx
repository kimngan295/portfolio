import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/home-main.svg"; // Updated path
import myImg from "../assets/avatar.svg"; // Updated path
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"; // Importing new icon
import '../styles/Home.css'; // Ensure this path is correct

function Home() {
  return (
    <>
      {/* Section Home */}
      <Container fluid className="home-section" id="home" sx={{ pt: "20px" }}>
        <div className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> LE THI KIM NGAN</strong>
              </h1>

              <div className="typewriter-container">
                <Typewriter
                  options={{
                    strings: ["Software Developer", "Web Developer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col md={5} className="home-img-col">
              <img src={homeLogo} alt="home pic" className="home-logo img-fluid" />
            </Col>
          </Row>
        </div>

        {/* Section Home2 */}
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row className="align-items-center">
              <Col md={8} className="home-about-description">
                <h1 className="intro-heading">
                  LET ME <span className="purple">INTRODUCE</span> MYSELF
                </h1>
                <p className="home-about-body">
                  I fell in love with programming and have learned a lot. 🤷‍♂️
                  <br />
                  <br />
                  I have knowledge of languages like
                  <i>
                    <b className="purple"> Python, JavaScript, Java.</b>
                  </i>
                  <br />
                  <br />
                  My fields of interest include building new &nbsp;
                  <i>
                    <b className="purple">Web Technologies and Products</b>
                  </i>
                  &nbsp; and areas related to
                  <b className="purple"> Game Development.</b>
                  <br />
                  <br />
                  I also enjoy developing products with
                  <b className="purple"> Node.js</b> and modern JavaScript libraries
                  and frameworks like
                  <i>
                    <b className="purple"> React.js</b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="home-avatar-col">
                <Tilt>
                  <img src={myImg} className="avatar img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to <span className="purple">connect</span> with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/kimngan295?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaFacebookF /> {/* Using the new Facebook icon */}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Home;
