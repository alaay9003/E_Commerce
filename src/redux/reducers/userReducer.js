import React from "react";
import {
  ADD_NEW_ADRESS,
  DELLET_ADDRESS,
  GET_ADDRESS,
  GET_ONE_ADDRESS,
  GET_USER,
  UPDATE_ADDRESS,
  UPDATE_PASSWORD,
  UPDATE_USER,
} from "../type";

const initial = {
  loading: true,
  address: null,
  allAddress: null,
  delletAddress: null,
  updateAddress: null,
  oneAddress: null,
  user: null,
  updateUser: null,
  updateUserPassword: null,
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_NEW_ADRESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    case GET_ADDRESS:
      return {
        ...state,
        loading: false,
        allAddress: action.payload,
      };
    case DELLET_ADDRESS:
      return {
        ...state,
        loading: false,
        delletAddress: action.payload,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        loading: false,
        updateAddress: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        updateUser: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        loading: false,
        updateUserPassword: action.payload,
      };
    case GET_ONE_ADDRESS:
      return {
        ...state,
        loading: false,
        oneAddress: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
