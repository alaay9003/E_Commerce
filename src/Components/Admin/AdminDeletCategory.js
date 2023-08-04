import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { ToastContainer } from "react-toastify";
import {
  deletCategory,
  getAllCategory,
} from "../../redux/actions/categoryAction";
import notify from "../../hook/useNotifications";

const AdminDeletCategory = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory());
    };
    run();
  }, []);
  const res = useSelector((state) => state.allCategory.category);
  const load = useSelector((state) => state.allCategory.loading);
  const handelSubmit = async () => {
    await dispatch(deletCategory(selected));
    notify("تم الحذف بنجاح", "success");
    handleClose();
    window.location.reload();
  };
  const onSelected = (e) => {
    setSelected(e.target.value);
    console.log(selected);
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>هل أنت متأكد من عمليه الحذف ؟</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              تراجع
            </Button>
            <Button variant="primary" onClick={handelSubmit}>
              تأكيد الحذف
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="admin-content-text pb-4"> حذف تصنيف</div>
        {load == true ? (
          <Col sm="8" className="mb-3">
            <ContentLoader viewBox="0 0 380 70">
              {/* Only SVG shapes */}
              <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
              <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
              <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
          </Col>
        ) : (
          <div>
            <Col sm="8" className="mb-3">
              <Form.Select
                aria-label="Default select example"
                value={selected}
                name="brand"
                onChange={onSelected}
              >
                <option> اختر التصنيف التي تريد حذفه.... </option>
                {res.data.map((item, key) => {
                  return (
                    <option value={item._id} key={key}>
                      {item.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col sm="8" className="d-flex justify-content-end ">
              <button onClick={handleShow} className="btn-save d-inline mt-2 ">
                حذف
              </button>
            </Col>
          </div>
        )}
        <ToastContainer />
      </Row>
    </div>
  );
};

export default AdminDeletCategory;
