import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateAdressHook from "../../hook/user/update-address-hook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [
    alias,
    city,
    phone,
    detail,
    setAlias,
    setCity,
    setPhone,
    setDetail,
    loading,
    setLoading,
    handelAddress,
  ] = UpdateAdressHook(id);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            value={alias}
            onChange={(e) => {
              setAlias(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينه"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelAddress}>
            حفظ تعديل العنوان
          </button>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
};

export default UserEditAddress;
