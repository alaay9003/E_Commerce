import {
  CREATE_BRAND,
  DELET_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_ONE_BRAND,
} from "../type";

const inital = {
  brand: null,
  loading: true,
  oneBrand: [],
  deletBrand: [],
};
const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case DELET_BRAND:
      return {
        deletBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };
    default:
      return state;
  }
};
export default brandReducer;
