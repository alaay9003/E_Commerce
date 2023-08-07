import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { delletAddress } from "../../redux/actions/userAction";
import notify from "./../../hook/useNotifications";
const UserDeletHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deletAdress = async () => {
    setLoading(true);
    await dispatch(delletAddress(id));
    handleClose();
    setLoading(false);
  };
  const address = useSelector((state) => state.userReducer.delletAddress);

  useEffect(() => {
    if (loading === false) {
      if (!navigator.onLine) {
        notify("هناك مشكله في اتصال الانترنت ", "warn");
        return;
      }
      if (address.status === "success") {
        notify("تم الحذف بنجاح ", "success");
        window.location.reload();
      } else {
        notify("حدث خطاء ", "error");
      }
      setLoading(true);
    }
  }, [loading]);
  return [handleShow, deletAdress, handleClose, show];
};

export default UserDeletHook;
