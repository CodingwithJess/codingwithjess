import { CardFooter } from "reactstrap";
import styled from "styled-components";
import React from "react";

const FooterWrapper = styled.div`
  #footer {
    width: 100%;
    background-color: #4c5b5e;
    opacity:.75;
    text-align: center;
    position: absolute;
    bottom: 0;

  }
  .fab {
    margin: 5px;
    color: #eebe68
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CardFooter id="footer">
      </CardFooter>
    </FooterWrapper>
  );
};
export default Footer;
