import {
  ADD_TO_CART,
  CLEAR_ALL_USER_CART,
  DELETE_ITEM_FROMCART,
  GET_FROM_CART,
  UPDATE_ITEM_FROMCART,
} from "./../type";

const inital = {
  addToCart: [],
  cartItems: [],
  clearCart: [],
  loading: true,
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
        loading: false,
      };
    case GET_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };
    case CLEAR_ALL_USER_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case DELETE_ITEM_FROMCART:
      return {
        ...state,
        deleteItem: action.payload,
      };
    case UPDATE_ITEM_FROMCART:
      return {
        ...state,
        updateItem: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
