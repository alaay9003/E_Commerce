import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandActions";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const SidebarSearchHook = () => {
  const [items, pagenation, onPress, getProduct, result] =
    ViewSearchProductsHook();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);

  const allCategory = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);
  // let category = [],
  //   brand = [];
  // if (allCategory) {
  //   category = allCategory.data;
  // }

  // if (allBrand) {
  //   brand = allBrand.data;
  // } else {
  //   brand = [];
  // }
  var queryCat = "";
  const [catCheked, setCatCheked] = useState([]);
  const clickCategory = (e) => {
    if (e.target.value == 0) {
      getQuery();
      if (e.target.checked == true) setCatCheked([]);
    } else {
      if (e.target.checked == true) {
        getQuery();
        setCatCheked([...catCheked, e.target.value]);
      } else if (e.target.checked == false) {
        getQuery();
        const newArr = catCheked.filter((item) => item !== e.target.value);
        setCatCheked(newArr);
      }
    }
  };

  useEffect(() => {
    getQuery();
  }, [catCheked]);

  const getQuery = () => {
    queryCat = catCheked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catCheked", queryCat);
    getProduct();
  };

  const [brandCheked, setBrandCheked] = useState([]);
  const clickBrand = (e) => {
    if (e.target.value == 0) {
      if (e.target.checked == true) setBrandCheked([]);
    } else {
      if (e.target.checked == true) {
        setBrandCheked([...brandCheked, e.target.value]);
      } else if (e.target.checked == false) {
        const newArr = brandCheked.filter((item) => item !== e.target.value);
        setBrandCheked(newArr);
      }
    }
  };

  useEffect(() => {
    getbrandQuery();
  }, [brandCheked]);
  var queryBrand = "";
  const getbrandQuery = () => {
    queryBrand = brandCheked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandCheked", queryBrand);
    getProduct();
  };
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const priceFrom = (e) => {
    setFrom(e.target.value);
    localStorage.setItem("priceFrom", e.target.value);
  };

  const priceTo = (e) => {
    setTo(e.target.value);
    localStorage.setItem("priceTo", e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [from, to]);

  return [allCategory, allBrand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;
