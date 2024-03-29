import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";
import AddToCartHook from "./../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductText = ({ item, images, cat, oneBrand, prod }) => {
  const { id } = useParams();
  // const [item, images, cat, oneBrand] = ViewProductDetailsHook(id);

  const [indexColor, onClickColor, addToCartHandel] = AddToCartHook(id, item);

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{oneBrand.name} </div>
        </Col>
      </Row>

      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    onClick={() => onClickColor(color, index)}
                    key={index}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: index === indexColor ? "2px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {item.price} جنية
          </div>
          <div
            onClick={addToCartHandel}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
