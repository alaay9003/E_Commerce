import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletProducts } from "../../redux/actions/productsAction";

const AdminAllProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    console.log(item.id);
    await dispatch(deletProducts(item._id));
    setShow(false);
    window.location.reload();
  };
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>هل أنت متأكد من عمليه الحذف ؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handelDelete}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              ازاله
            </div>
            <Link
              to={`/admin/editproduct/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <div className="d-flex justify-content-center text-center">
            <Card.Img
              style={{ height: "228px", width: "230px", padding: "10px" }}
              src={item.imageCover}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
