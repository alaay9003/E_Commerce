import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
const CartItem = ({ item }) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook(item);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>هل أنت متأكد من عمليه الحذف ؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handelDeleteItem}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
      <img
        className="ms-4 pt-4"
        style={{ width: "150px", maxHeight: "80%" }}
        // width="200px"
        src={
          "http://127.0.0.1:8000/products/" + item.product.imageCover || mobile
        }
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {item.product.category.name}
            </div>
            <div
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">{item.product.title}</div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item.product.ratingsAverage || 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {item.product.brand.name}{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: `${item.color}` || "white" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline mt-2"> الكميه :</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 text-cente"
                type="number"
                style={{ width: "50px", height: "40px" }}
              />
              <Button
                className="btn btn-dark text-center"
                onClick={handeleUpdateCart}
              >
                تطبيق
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text">{item.price}</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
