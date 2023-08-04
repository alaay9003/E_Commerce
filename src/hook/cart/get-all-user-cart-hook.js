import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductCart } from "../../redux/actions/cartAction";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemsNum, setItemsNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [couponNameRes, setCouponName] = useState("");
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState(0);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductCart());
      setLoading(false);
    };
    get();
  }, []);
  // const res = useSelector((state) => state.cartReducer.cartItems);
  // useEffect(() => {
  //   if (loading === false) {
  //     if (res && res.status === "success") {
  //       setItemsNum(res.numOfCartItems);
  //       setCartItems(res.data.products);
  //       setTotalCartPrice(res.data.totalCartPrice);

  //       if (res.data.coupon) {
  //         setCouponName(res.data.coupon);
  //       } else {
  //         setCouponName("");
  //       }
  //       if (res.data.totalAfterDiscount) {
  //         setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount);
  //       } else {
  //         setTotalCartPriceAfterDiscount("");
  //       }
  //     } else {
  //       setCouponName("");
  //       setTotalCartPriceAfterDiscount("");
  //       setItemsNum(0);
  //       setCartItems([]);
  //       setTotalCartPrice(0);
  //     }
  //   }
  // }, [loading]);

  return [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ];
};

export default GetAllUserCartHook;