import React from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GetProductLikeHook from "../../hook/products/get-product-like-hook";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import SearchCountResult from "../../Components/Utility/SearchCountResult";

const OneCategoryPage = () => {
  const { id } = useParams();
  const [products] = GetProductLikeHook(id);
  console.log(products);
  return (
    <div style={{ minHeight: "600px" }}>
      <Container>
        <SearchCountResult title={` هناك ${products.length} نتيجه بحث  `} />
        <Row className="d-flex flex-row">
          <Col sm="10" xs="10" md="11" className="d-flex">
            {products.length > 0 ? (
              <CardProductsContainer products={products} />
            ) : null}
          </Col>
        </Row>
        {/* <Pagination pageCount={pageCount} onPress={onPress} /> */}
      </Container>
    </div>
  );
};

export default OneCategoryPage;
