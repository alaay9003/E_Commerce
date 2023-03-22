import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = HomeBrandHook();
  return (
    <div className="my-3">
      {
        brand.results > 0 ? (
                <Container>
          <div>
            
            <SubTitle title={title} btntitle={btntitle} pathText={"allbrand"} />
            <Row className="my-1 justify-content-between">
        {
            loading ? (
                <Spinner animation="border" />
              ) : brand.results > 0  ? (
                brand.data.slice(0, 5).map((item, index) => {
                  return <BrandCard img={item.image} key={index} />;
                })
              ) : (
                <h2>لا يوجد تصنيفات ...</h2>
              )
        }
            </Row>
          </div>
      </Container>
        ) : null 
      }

    </div>
  );
};

export default BrandFeatured;
