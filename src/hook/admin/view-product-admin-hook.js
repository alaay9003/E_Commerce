import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(6));
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  let items = [];
  let pagenation = [];

  try {
    if (allProducts.data) {
      items = allProducts.data;
      // console.log(items)
    } else {
      items = [];
    }
    if (allProducts.paginationResult) {
      pagenation = allProducts.paginationResult.numberOfPages;
      // console.log(items)
    } else {
      pagenation = [];
    }
  } catch (error) {
    console.log(error);
  }

  return [items, pagenation];
};

export default ViewProductAdminHook;
