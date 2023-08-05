import {
  GET_ERROR,
  ADD_TO_CART,
  GET_FROM_CART,
  CLEAR_ALL_USER_CART,
  DELETE_ITEM_FROMCART,
  UPDATE_ITEM_FROMCART,
} from "./../type";
import { useInsertData } from "../../hooks/useInsertData";
import useGetDataToken from "./../../hooks/useGetDataToken";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const addProductToCart = (body) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/cart`, body);

    dispatch({
      type: ADD_TO_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response,
    });
  }
};

export const getProductCart = () => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/cart`);

    dispatch({
      type: GET_FROM_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response,
    });
  }
};

export const clearAllCartItem = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart`);
    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload: e.response,
    });
  }
};

export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${id}`);

    dispatch({
      type: DELETE_ITEM_FROMCART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ITEM_FROMCART,
      payload: e.response,
    });
  }
};

//update cart Item
export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/${id}`, body);
    //  console.log(response)
    dispatch({
      type: UPDATE_ITEM_FROMCART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ITEM_FROMCART,
      payload: e.response,
    });
  }
};
