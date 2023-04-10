import {
  CREATE_USER,
  FOREGT_PASSWORD,
  LOGIN_USER,
  RESET_PASSWORD,
  VERIFY_PASSWORD,
} from "../type";

const inital = {
  createUser: [],
  loading: true,
  loginUser: [],
  currentUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };
    case FOREGT_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
