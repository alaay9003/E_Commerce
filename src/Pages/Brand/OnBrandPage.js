import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import GetProductBrandHook from "../../hook/products/get-product-like-brand-hook";

const OnBrandPage = () => {
  const { id } = useParams();
  const [products, loading] = GetProductBrandHook(id);
  return (
    <div style={{ minHeight: "600px" }}>
      <Container>
        {products ? (
          <div>
            <SearchCountResult
              title={` هناك ${products.results} نتيجه بحث  `}
            />
            <Row className="d-flex flex-row">
              <Col sm="10" xs="10" md="11" className="d-flex">
                <CardProductsContainer products={products.data} />
              </Col>
            </Row>
          </div>
        ) : null}

        {/* <Pagination pageCount={pageCount} onPress={onPress} /> */}
      </Container>
    </div>
  );
};

export default OnBrandPage;
