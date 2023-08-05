import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import HomeCategoryHook from "../../hook/category/home-category-hook";
import CategoryCard from "./CategoryCard";

const CategorysHeader = ({ cat }) => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {cat ? (
              cat.data.slice(0, 10).map((item, key) => {
                return (
                  <div className="cat-text-header " key={key}>
                    {item.name}
                  </div>
                );
              })
            ) : (
              <div className="cat-text-header ">جاري التحميل ..</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorysHeader;
