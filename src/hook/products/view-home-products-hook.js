import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./../../redux/actions/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const loading = useSelector((state) => state.allproducts.loading);
  let items = [];
  if (!loading && allProducts) {
    items = allProducts.data.slice(0, 4);
  } else {
    items = [];
  }

  return [items];
};

export default ViewHomeProductsHook;
