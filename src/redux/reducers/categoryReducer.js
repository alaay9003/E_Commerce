import {
  CREATE_CATEGORY,
  DELET_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_CATEGORY,
} from "../type";

const inital = {
  category: null,
  loading: true,
  oneCategory: [],
  deletCategory: [],
};

const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        category: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };
    case GET_ONE_CATEGORY:
      return {
        loading: false,
        oneCategory: action.payload,
      };
    case DELET_CATEGORY:
      return {
        loading: false,
        deletCategory: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
