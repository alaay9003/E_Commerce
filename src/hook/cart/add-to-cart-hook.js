import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";
import notify from "./../useNotifications";

const AddToCartHook = (id, item) => {
  const diaspatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [ColorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);
  const onClickColor = (color, index) => {
    setColorText(color);
    setIndexColor(index);
  };

  const addToCartHandel = async () => {
    if (localStorage.getItem("user") == null) {
      return notify("يجب تسجيل الدخول", "warn");
    }

    if (item.availableColors) {
      if (ColorText === "") {
        notify("يرجي اختيار لون المنتج", "warn");
        return;
      }
    }
    setLoading(true);
    await diaspatch(
      addProductToCart({
        productId: id,
        color: ColorText,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);
  useEffect(() => {
    console.log(res);
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم الاضافه بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("يرجي تسجيل الدخول", "warn");
      }
    }
  }, [loading]);
  return [indexColor, onClickColor, addToCartHandel];
};

export default AddToCartHook;
