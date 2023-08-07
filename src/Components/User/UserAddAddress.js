import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewAdress } from "../../redux/actions/userAction";
import notify from "../../hook/useNotifications";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AddAdressHook from "../../hook/user/add-address-hook";

const UserAddAddress = () => {
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
    addAddress,
  ] = AddAdressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
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
            type="tel"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Col>
        <ToastContainer />
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={addAddress}>
            اضافة عنوان
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
