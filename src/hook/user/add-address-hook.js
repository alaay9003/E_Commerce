import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAdress } from "../../redux/actions/userAction";
import notify from "../../hook/useNotifications";
import { useEffect } from "react";
const AddAdressHook = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [alias, setAlias] = useState("");
  const [detail, setDetail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const addAddress = async (e) => {
    e.preventDefault();
    if (phone === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    if (city === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    if (detail === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    if (alias === "") {
      notify("من فضلك اكمل البينات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addNewAdress({
        alias: alias,
        details: detail,
        phone: phone,
        city: city,
        postalCode: "",
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.userReducer.address);
  useEffect(() => {
    if (loading === false) {
      console.log(res);
      setPhone("");
      setCity("");
      setAlias("");
      setDetail("");
      if (!navigator.onLine) {
        notify("هناك مشكله في اتصال الانترنت ", "warn");
        return;
      }
      if (res.status === 201 || res.status === 200) {
        notify("تم الاضافه بنجاح ", "success");
      } else if (res.status === 400) {
        notify("حدث خطاء اثناء الاضافه ", "error");
      } else {
        notify("حدث خطاء اثناء الاضافه ", "error");
      }
      setLoading(true);
    }
  }, [loading]);
  return [
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
  ];
};

export default AddAdressHook;
