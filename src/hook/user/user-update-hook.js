import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/actions/userAction";
import notify from "./../useNotifications";

const UserUpdateHook = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingUp, setLoadingUp] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getUser());
      setLoading(false);
    };
    run();
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (user) {
      setPhone(user.data.phone);
      setUserName(user.data.name);
    }
  }, [loading]);

  const updateUserFun = async () => {
    if (phone === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    if (userName === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    setLoadingUp(true);
    await dispatch(
      updateUser({
        name: userName,
        phone: phone,
      })
    );
    setLoadingUp(false);
  };
  if (!loadingUp) {
    notify("تم التعديل بنجاح", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return [user, userName, phone, setUserName, setPhone, updateUserFun];
};

export default UserUpdateHook;
