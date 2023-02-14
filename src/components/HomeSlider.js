import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cover = ({ image, title, buttonText, buttonLink }) => {
  return (
    <div
      className='cover'
      style={{
        backgroundImage: `url(https://wallpapers.com/images/featured/7ws46k7xo1gcptjo.jpg)`,
      }}
    >
      <Container className='cover-content'>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <h1 className='text-center cover-title'>{title}</h1>
            <Button variant='primary' href={buttonLink}>
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cover;
