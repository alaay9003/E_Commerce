import React from "react";
import { ToastContainer } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import UserUpdateHook from "./../../hook/user/user-update-hook";
import ContentLoader from "react-content-loader";
const UserFileUpdate = () => {
  const [user, userName, phone, setName, setPhone, updateUser] =
    UserUpdateHook();

  return (
    <div>
      {user ? (
        <div>
          <Row className="justify-content-start ">
            <div className="admin-content-text pb-2">تعديل المستخدم </div>

            <Col sm="8">
              <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="الاسم"
                value={userName}
                onChange={(e) => {
                  setName(e.target.value);
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
              <button className="btn-save d-inline mt-2 " onClick={updateUser}>
                تعديل
              </button>
            </Col>
          </Row>
        </div>
      ) : (
        <ContentLoader viewBox="0 0 380 90" backgroundColor="#dfdfe0">
          {/* Only SVG shapes */}
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="20" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="20" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
      )}

      <ToastContainer />
    </div>
  );
};

export default UserFileUpdate;
