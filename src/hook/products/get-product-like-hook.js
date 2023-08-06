import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLike } from "../../redux/actions/productsAction";

const GetProductLikeHook = (PrdID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getProductLike(PrdID));
    };
    run();
  }, []);
  const res = useSelector((state) => state.allproducts.oneProductLike);
  const loading = useSelector((state) => state.allproducts?.loading);
  let products = [];
  if (!loading && res) {
    products = res.data;
  } else {
    products = [];
  }
  return [products];
};

export default GetProductLikeHook;
