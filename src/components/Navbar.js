import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div `
a {
  color: #eebe68;
  margin-right: 10px;
  font-family: 'Montserrat', sans-serif;
}
.navColor {
  background-color: #4c5b5e;
  opacity:.75;
}
`

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavStyle>
      <div>
      <Navbar justify-content-center expand="md" className="navColor">
        <NavbarBrand>
          <Link to ="/">Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to ="/about">About</Link>
            </NavItem>
            <NavItem>
            <Link to ="/projects">Projects</Link>
            </NavItem>
            <NavItem>
            <Link to ="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </NavStyle>
  );
}

export default NavBar; 
