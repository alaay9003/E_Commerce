import React from 'react'
import { Container, Row, Spinner} from "react-bootstrap";
import BrandCard from "./BrandCard";

const BrandContainer = ({data,loading}) => {
  
  return (
        <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          
        {
            loading ? (
                <Spinner animation="border" />
              ) : data ? (
                data.map((item, index) => {
                  return <BrandCard img={item.image} key={index}/>;
                })
              ) : (
                <h2>لا يوجد تصنيفات ...</h2>
              )
        }
        </Row>
      </Container>
    </div>
  )
}

export default BrandContainer