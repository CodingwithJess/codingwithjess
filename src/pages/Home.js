import React from "react";
import { Container,Col,Row,Card,CardImg,CardBody } from "reactstrap";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../img/logo.png"

const MainStyle =styled.div `
align-items: center;
p {
  color: #eebe68;
  text-align: center;
  }
img {
  max-width:500px;
  margin: 0 auto;
}
`

const Home = () => {
  return (
    <>
      <NavBar/>
      <Container fluid={true}>
        <MainStyle>
          <div>
            <Row>
              <CardImg src={logo} alt="Jessica Edens Logo"/>
            </Row>
            <Row>
                <CardBody>
                <p> HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React | Node
                </p>
                </CardBody>
            </Row>
          </div>
        </MainStyle>
      </Container>
      <Footer/>
    </>
  )
}

export default Home;