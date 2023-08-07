import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotifications";
import { useEffect } from "react";
import { getOneAddress, updateAddress } from "../../redux/actions/userAction";

const UpdateAdressHook = (id) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [alias, setAlias] = useState("");
  const [detail, setDetail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [addresLoading, setAdressLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      setAdressLoading(true);
      await dispatch(getOneAddress(id));
      setAdressLoading(false);
    };
    run();
  }, []);

  const handelAddress = async () => {
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
      updateAddress(id, {
        alias: alias,
        details: detail,
        phone: phone,
        city: city,
        postalCode: "",
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.userReducer.updateAddress);
  const address = useSelector((state) => state.userReducer.oneAddress);

  useEffect(() => {
    if (addresLoading == false) {
      if (address && address.status === "success") {
        setAlias(address.data.alias);
        setDetail(address.data.details);
        setPhone(address.data.phone);
        setCity(address.data.city);
      }
    }
  }, [addresLoading]);
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
        notify("تم التعديل بنجاح ", "success");
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
    handelAddress,
  ];
};

export default UpdateAdressHook;
