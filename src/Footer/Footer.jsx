/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
     <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <h4>About Us</h4>
            <p>
              We are a food recipe website dedicated to bringing you delicious and healthy recipes to try at home.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h4>Contact Us</h4>
            <p>
              <i className="fa fa-envelope"></i> info@yourfoodrecipewebsite.com
            </p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Food Recipe Website. All Rights Reserved.
        </p>
      </Container>
        </div>
    );
};

export default Footer;