import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";

const CartCheckout = ({ totalCartPrice }) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook();
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>هل أنت متأكد من عمليه الحذف ؟</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              تراجع
            </Button>
            <Button variant="primary" onClick={handelDeleteCart}>
              تأكيد الحذف
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="d-flex  ">
          <input
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button className="copon-btn d-inline ">تطبيق</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPrice || 0} جنيه
        </div>
        <button
          onClick={handleShow}
          className="product-cart-add w-100 px-2 my-2"
        >
          {" "}
          مسح العربه{" "}
        </button>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
