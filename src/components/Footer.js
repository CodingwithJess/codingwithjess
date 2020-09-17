import { CardFooter } from "reactstrap";
import styled from "styled-components";
import React from "react";

const FooterWrapper = styled.div`
  #footer {
    width: 100%;
    background-color: #4c5b5e;
    opacity:.75;
    font-size: 16px;
    text-align: center;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
  }
  .fab {
    margin: 10px;
    color: #eebe68
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CardFooter id="footer">
        <div>
        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/edens-jessica/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in fa-4x" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="https://github.com/CodingwithJess" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github fa-4x" aria-hidden="true" />
          </a>
        </div>
        </div>
      </CardFooter>
    </FooterWrapper>
  );
};
export default Footer;
