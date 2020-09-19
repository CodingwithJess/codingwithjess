import React from "react";
import { Container, Row, CardImg, CardBody } from "reactstrap";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import logo from "../img/logo.png";

const MainStyle = styled.div`
  align-items: center;
  p {
    color: #eebe68;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
  img {
    max-width: 500px;
    margin: 0 auto;
  }
  .fab {
    margin: 10px;
    color: #4c5b5e;
  }
  .social-links {
    text-align: center;
  }
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid={true}>
        <MainStyle>
          <div>
            <Row>
              <CardImg src={logo} alt="Jessica Edens Logo" />
            </Row>
            <Row>
              <CardBody>
                <p>
                  HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React | Node
                </p>
                <div className="social-links">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/edens-jessica/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin-in fa-4x" aria-hidden="true"/>
                  </a>
                  {/* Github */}
                  <a href="https://github.com/CodingwithJess" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github fa-4x" aria-hidden="true" />
                  </a>
                </div>
              </CardBody>
            </Row>
          </div>
        </MainStyle>
      </Container>
    </>
  );
};

export default Home;
