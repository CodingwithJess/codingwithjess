import React from "react";
import { Container, Row, CardImg, CardBody } from "reactstrap";
import styled from "styled-components";
import NavBar from "../components/Navbar";

const ContactStyle = styled.div`
  p {
    color: #eebe68;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
  .contactBody {
    background-color: #4c5b5e;
    opacity: 0.92;
    border-radius: 50px;
    color: #ffdfaf;
    display: flex;
    text-align: center;
    vertical-align: middle;
    width: 400px;
    margin: 0 auto;
  }
  #pic {
    text-align: center;
  }
  h1 {
    text-align: center;
    color: #fcf5e9;
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: 5rem;
    font-family: "Cookie";
  }
  .neon-text {
    text-shadow: 0.1vw 0vw 0.25vw #e2cfb2, 0.2vw 0vw 0.25vw #e2cfb2,
      0.4vw 0vw 0.25vw #e2cfb2, 0.1vw 0vw 0vw #e9bf77, 0.2vw 0vw 0vw #e9bf77,
      0.4vw 0vw 0vw #e9bf77, 0.1vw 0vw 0.1vw #e9bf77, 0.2vw 0vw 0.1vw #e9bf77,
      0.4vw 0vw 0.1vw #e9bf77, 0.1vw 0vw 2vw #e9bf77, 0.2vw 0vw 2vw #e9bf77,
      0.4vw 0vw 2vw #e9bf77, 0.1vw 0vw 1vw #eebe68, 0.2vw 0vw 1vw #eebe68,
      0.4vw 0vw 5vw #eebe68, 0.1vw 0vw 5vw #eebe68, 0.2vw 0vw 20vw #eebe68,
      0.4vw 0vw 10vw #eebe68, 0.1vw 0vw 10vw #eebe68, 0.2vw 0vw 30vw #eebe68,
      0.4vw 0vw 10vw #eebe68;
  }
  .fab {
    margin: 10px;
    color: #4c5b5e;
  }

  .social-links {
    margin-top: 80px;
    margin-bottom: 10px;
    text-align: center;
  }

  .fa,
  .fas {
    font-size: 55px;
    margin: 10px;
    padding: 10px;
  }

  ul {
    list-style: none;
  }
`;

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container fluid={true}>
        <ContactStyle>
          <div>
            <div className="neon-text">
              <h1>Contact</h1>
            </div>
            <Row className="contactBody">
              <ul>
                <li>
                  <i className="fa fa-phone-square neon-text" aria-hidden="true"/>
                  (303) 905-5419
                </li>
                <li>
                  <i className="fa fa-envelope neon-text" aria-hidden="true" />
                  jess@codingwithjess.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt neon-text" aria-hidden="true" />
                  Denver, CO
                </li>
              </ul>
            </Row>
            <Row>
              <CardBody>
                <div className="social-links neon-text">
                {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/edens-jessica/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in fa-4x" aria-hidden="true"/>
                  </a>
                {/*Github */}
                  <a
                    href="https://github.com/CodingwithJess"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github fa-4x" aria-hidden="true" />
                  </a>
                </div>
              </CardBody>
            </Row>
          </div>
        </ContactStyle>
      </Container>
    </>
  );
};

export default Contact;
