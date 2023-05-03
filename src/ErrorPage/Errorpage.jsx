import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Errorpage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Image src="https://media.istockphoto.com/id/1412359923/photo/a-guy-checks-an-error-404-page-not-found-online-service-notice-message-on-a-website-using-a.webp?s=2048x2048&w=is&k=20&c=CQZrOLBoFHWpH3pxQJD3IpKVHCO0DO-8MLQ80Bd3xk4=" alt="Error" fluid />
          <h1 className="my-3">Oops! Page Not Found.</h1>
          <p className="lead">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Errorpage;
