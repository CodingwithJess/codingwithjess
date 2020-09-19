import React from "react";
import { Container,Row,Col,CardImg,CardBody } from "reactstrap";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import aboutMe from "../img/profile.jpeg";

const AboutStyle = styled.div `
p {
  color: #eebe68;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  }
#aboutBody {
  background-color:#4c5b5e;
  opacity:.92;
  border-radius:12px;
  color: #ffdfaf;
}
#pic {
  text-align: center;
}
h1 {
  text-align:center;
  color: #fcf5e9;
  margin-top:50px;
  margin-bottom:25px;
  font-size:5rem;
  font-family: "Cookie";
}
.neon-text {
  text-shadow: 
  .1vw 0vw .25vw #e2cfb2, .2vw 0vw .25vw #e2cfb2, .4vw 0vw .25vw #e2cfb2, 
  .1vw 0vw   0vw #e9bf77, .2vw 0vw   0vw #e9bf77, .4vw 0vw   0vw #e9bf77,
  .1vw 0vw  .1vw #e9bf77, .2vw 0vw  .1vw #e9bf77, .4vw 0vw  .1vw #e9bf77,
  .1vw 0vw   2vw #e9bf77, .2vw 0vw   2vw #e9bf77, .4vw 0vw   2vw #e9bf77, 
  .1vw 0vw   1vw #eebe68, .2vw 0vw   1vw #eebe68, .4vw 0vw   5vw #eebe68, 
  .1vw 0vw   5vw #eebe68, .2vw 0vw  20vw #eebe68, .4vw 0vw  10vw #eebe68,
  .1vw 0vw  10vw #eebe68, .2vw 0vw  30vw #eebe68, .4vw 0vw  10vw #eebe68;
}
`

const About = () => {
  return (
    <>
      <NavBar/>
        <Container fluid={true}>
          <AboutStyle>
              <div className="neon-text">
                <h1>About Me</h1>
              </div>
              <div id="aboutBody">
                <Row>
                  <Col sm={6}>
                    <CardBody>
                      <CardImg src={aboutMe} alt="" id="pic"/>
                    </CardBody>
                  </Col>  
                  <Col sm={6}>
                    <CardBody>
                    <hr/>
                      <p>
                      Coding makes me feel like a witch. 
                      <br/> <br/>
                      I remember the first time I built a good looking and responsive website from scratch.   
                      <br/><br/>*BOOM* <br/><br/>
                      Magic. Right before my eyes.
                      <br/>Every time I sit down to code I am in
                      awe of the endless possibilities, limited only by the speed at
                      which I'm able to learn and apply a new language or framework.  
                      <br/><br/> I am an aspiring full-stack web developer who has a deep passion for
                      brewing up web designs, conquering bugs, integrating fully
                      responsive mobile friendly sites, building servers, incorporating
                      API's, mastering git collaboration, and continuing to learn in a
                      fast changing industry.  
                      <br/> <br/>Full-stack web development also calls to
                      many of my best qualities. The artistic and endlessly creative
                      side of Front End, and the analytical and robust side of Back End.
                      Coding has me spellbound and I cannot wait to see where the journey takes me.
                      </p>
                      <br/>
                    <hr/>
                    </CardBody>
                  </Col> 
                </Row>
              </div>
          </AboutStyle>
        </Container>
    </>
  )
}

export default About;