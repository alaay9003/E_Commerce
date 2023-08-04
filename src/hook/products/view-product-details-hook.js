import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getOneProduct,
  getProductLike,
} from "./../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandActions";

const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(prodID));
    };
    run();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [prodID]);

  const Product = useSelector((state) => state.allproducts.oneProduct);
  const loading = useSelector((state) => state.allproducts.loading);
  const category = useSelector((state) => state.allCategory?.oneCategory);
  const brand = useSelector((state) => state.allBrand?.oneBrand);
  const productLike = useSelector((state) => state.allproducts?.oneProductLike);

  let item = [];
  let images = [];
  if (Product) {
    item = Product.data;
    if (item) {
      images = Product.data.images.map((img) => {
        return { original: img };
      });
    }
  } else {
    item = [];
    images = [];
  }

  let cat = [];
  if (category) {
    cat = category.data;
  } else {
    cat = [];
  }

  // if (Product.length > 0) {
  //   console.log(Product.length);
  //   images = Product.data.images.map((img) => {
  //     return { original: img };
  //   });
  // } else {
  //   images = [];
  // }

  useEffect(() => {
    if (item) {
      if (item.brand) dispatch(getOneBrand(item.brand));
      if (item.category) {
        dispatch(getOneCategory(item.category));
        dispatch(getProductLike(item.category));
      }
    }
  }, [item]);

  let oneBrand = [];
  if (brand) {
    oneBrand = brand.data;
  } else {
    oneBrand = [];
  }

  let prod = [];
  if (productLike) {
    prod = productLike.data;
  } else {
    prod = [];
  }

  return [item, images, cat, oneBrand, prod];
};

export default ViewProductDetailsHook;
