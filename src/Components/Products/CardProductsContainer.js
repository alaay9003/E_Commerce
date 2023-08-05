import React from "react";
import { Row, Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-between ">
        {products.length > 0 ? (
          products.map((item, index) => {
            return <ProductCard title="1" key={index} item={item} />;
          })
        ) : (
          <Spinner animation="border" />
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
