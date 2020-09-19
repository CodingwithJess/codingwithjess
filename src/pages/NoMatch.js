import React from "react";
import { Row, Container } from "reactstrap";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";

function NoMatch() {
  return (
    <Container fluid>
      <NavBar/>
      <Row>
            <h1>404 Page Not Found <span role="img" aria-label="Poop emoji">
              <i className="fas fa-poo"></i>
              </span></h1>
      </Row>     
      <Footer/>
    </Container>
  );
}

export default NoMatch;
