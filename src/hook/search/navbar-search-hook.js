import { useState, useEffect } from "react";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const NavbarSearchHook = () => {
  const [searchWord, setSearchWord] = useState("");
  const [items, pagenation, onPress, getProduct] = ViewSearchProductsHook();

  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    setTimeout(() => {
      if (window.location.pathname != "/products")
        window.location.href = "/products";
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [searchWord, onChangeSearch];
};

export default NavbarSearchHook;
