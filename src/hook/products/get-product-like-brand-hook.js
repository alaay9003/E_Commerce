import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByBrand } from "../../redux/actions/productsAction";
import { useState } from "react";

const GetProductBrandHook = (PrdID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByBrand(PrdID));
  }, []);
  const products = useSelector((state) => state.allproducts.oneBrandProduct);
  const loading = useSelector((state) => state.allproducts.loading);

  //     let products = ["0"];
  //     if (!loading) {
  //     if (res != null) {
  //       products = res.data;
  //       console.log(products);
  //     }
  //   } else {
  //     products = [];
  //   }

  return [products, loading];
};
export default GetProductBrandHook;
