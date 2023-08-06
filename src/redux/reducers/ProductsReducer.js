import {
  CREATE_ProductS,
  GET_ERROR,
  GET_Product_BRAND,
  GET_Product_DETAILS,
} from "../type";
import {
  GET_ALL_ProductS,
  GET_Product_Like,
  DELETE_Product,
  UPDATE_PRODUCT,
} from "./../type";

const inital = {
  products: [],
  loading: true,
  allProducts: [],
  oneProduct: [],
  updateProducts: [],
  oneProductLike: [],
  deleteProduct: [],
  oneBrandProduct: null,
};
const productsReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_ProductS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    case GET_ALL_ProductS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_Product_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_Product_BRAND:
      return {
        ...state,
        oneBrandProduct: action.payload,
        loading: false,
      };
    case GET_Product_Like:
      return {
        ...state,
        oneProductLike: action.payload,
        loading: false,
      };
    case DELETE_Product:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default productsReducer;
