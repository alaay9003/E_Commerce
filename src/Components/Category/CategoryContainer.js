import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoryContainer = ({ data, loading }) => {
  const color = [
    "#F4DBA5",
    "#0034FF",
    "#FFD3E8",
    "#55CFDF",
    "#FF6262",
    "#F4DBA5",
  ];

  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          {loading ? (
            <Spinner animation="border" />
          ) : data ? (
            data.map((item, index) => {
              return (
                <CategoryCard key={index} img={item.image} name={item.name} />
              );
            })
          ) : (
            <h2>لا يوجد تصنيفات ...</h2>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
