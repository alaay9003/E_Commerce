import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetalis = ({ item, images, cat, oneBrand, prod }) => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery images={images} />
        </Col>
        <Col lg="8">
          <ProductText
            item={item}
            images={images}
            cat={cat}
            oneBrand={oneBrand}
            prod={prod}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
