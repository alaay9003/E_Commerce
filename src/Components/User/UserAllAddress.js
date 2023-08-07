import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAddress } from "../../redux/actions/userAction";
import { useState } from "react";
import ContentLoader from "react-content-loader";
const UserAllAddress = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const run = async () => {
      await dispatch(getAllAddress());
    };
    run();
    setLoading(false);
  }, []);
  const address = useSelector((state) => state.userReducer.allAddress);

  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العناوين</div>
      {address ? (
        address.results ? (
          address.data ? (
            address.data.map((item, key) => {
              return <UserAddressCard key={key} item={item} />;
            })
          ) : (
            <div>لايوجد عناوين</div>
          )
        ) : (
          <div>لايوجد عناوين</div>
        )
      ) : (
        <ContentLoader viewBox="0 0 380 90" backgroundColor="#dfdfe0">
          {/* Only SVG shapes */}
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="20" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="20" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
      )}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
