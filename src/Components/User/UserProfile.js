import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserPassword } from "../../redux/actions/userAction";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(getUser());
    };
    run();
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  const updatePassword = async () => {
    //e.preventDefault();
    setLoading(true);
    await dispatch(
      updateUserPassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: validPassword,
      })
    );
    setLoading(false);
  };

  const pasResponse = useSelector(
    (state) => state.userReducer.updateUserPassword
  );
  useEffect(() => {
    if (pasResponse) {
    }
    console.log(pasResponse);
    console.log(loading);
  }, [loading]);
  return (
    <div>
      <div className="admin-content-text">الصفحه الشخصية</div>
      {user ? (
        <div className="user-address-card my-3 px-2">
          <Row className="d-flex justify-content-between pt-2">
            <Col xs="6" className="d-flex">
              <div className="p-2">الاسم:</div>
              <div className="p-1 item-delete-edit">{user.data.name}</div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
              <div className="d-flex mx-2">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={deleteicon}
                  height="17px"
                  width="15px"
                />
                <Link to={"/user/update"} style={{ textDecoration: "none" }}>
                  <p className="item-delete-edit"> تعديل</p>
                </Link>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col xs="12" className="d-flex">
              <div className="p-2">رقم الهاتف:</div>
              <div className="p-1 item-delete-edit">{user.data.phone}</div>
            </Col>
          </Row>
          <Row className="">
            <Col xs="12" className="d-flex">
              <div className="p-2">الايميل:</div>
              <div className="p-1 item-delete-edit">{user.data.email}</div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs="10" sm="8" md="6" className="">
              <div className="admin-content-text">تغير كملة المرور</div>
              <input
                type="input"
                className="input-form d-block mt-1 px-3"
                placeholder="ادخل كلمة المرور القديمة"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
              <input
                type="input"
                className="input-form d-block mt-3 px-3"
                placeholder="ادخل كلمة المرور الجديده"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <input
                type="input"
                className="input-form d-block mt-3 px-3"
                placeholder="تأكيد كلمة المرور الجديده"
                value={validPassword}
                onChange={(e) => {
                  setValidPassword(e.target.value);
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
              <button
                className="btn-save d-inline mt-2 "
                onClick={updatePassword}
              >
                حفظ كلمة السر
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
    </div>
  );
};

export default UserProfile;
