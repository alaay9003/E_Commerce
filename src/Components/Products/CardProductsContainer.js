import React from "react";
import { Row } from "react-bootstrap";
import { Container} from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

const CardProductsContainer = ({ title, btntitle, pathText ,products}) => {

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="justify-content-between ">
        {
          products ? (
             
            products.map((item,index)=>{
                 return ( <ProductCard title="1" key={index} item={item}/> )
            })
            ):null
        }
      </Row>
    </Container>
  );
};

export default CardProductsContainer;