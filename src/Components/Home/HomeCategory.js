import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [category, loading, color] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        {loading ? (
          <Spinner animation="border" />
        ) : category.data ? (
          category.data.slice(0, 5).map((item, index) => {
            return (
              <CategoryCard
                img={item.image}
                background={color[index]}
                name={item.name}
              />
            );
          })
        ) : (
          <h2>لا يوجد تصنيفات ...</h2>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
