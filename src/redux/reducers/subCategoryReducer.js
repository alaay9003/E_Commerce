import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY_ID } from "../type";

const inital = {
  subCategory: [],
  loading: true,
};
const subCategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      };
    case GET_SUB_CATEGORY_ID:
      return {
        subCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default subCategoryReducer;
