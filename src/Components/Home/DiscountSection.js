import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DiscountSection = ({ img, title, color }) => {
  return (
    <Container>
      <Row
        className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center"
        style={{
          background: `radial-gradient(${color})`,
        }}
      >
        <Col sm="6">
          <div className="discount-title">{title}</div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={img} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
