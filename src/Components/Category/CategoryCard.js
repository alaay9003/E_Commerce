import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, name, id }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <Link to={`/onecategory/${id}`} style={{ textDecoration: "none" }}>
        <div className="allCard mb-3 ">
          <div className="categoty-card "></div>
          <img
            alt="category"
            src={img}
            className="categoty-card-img card-image"
            style={{ borderRadius: "20px" }}
          />
          <p className="categoty-card-text my-2">{name}</p>
        </div>
      </Link>
    </Col>
  );
};

export default CategoryCard;
