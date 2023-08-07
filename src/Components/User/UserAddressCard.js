import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import { ToastContainer } from "react-toastify";
import UserDeletHook from "../../hook/user/user-delet-hook";
const UserAddressCard = ({ item }) => {
  const [handleShow, deletAdress, handleClose, show] = UserDeletHook(item._id);
  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>هل أنت متأكد من عمليه الحذف ؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={deletAdress}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="1">
          <div className="p-2">{item.alias}</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <Link
                to={`/user/edit-address/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <p className="item-delete-edit"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit" onClick={handleShow}>
                {" "}
                ازاله
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {item.city}
          </div>
        </Col>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {item.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {item.phone}
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
};

export default UserAddressCard;
