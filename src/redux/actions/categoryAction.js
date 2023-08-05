import {
  CREATE_CATEGORY,
  DELET_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_CATEGORY,
} from "./../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";

export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}`);
    //console.log("resssssss" + res);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=10&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      "/api/v1/categories",
      formData
    );

    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + e,
    });
  }
};

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + e,
    });
  }
};

export const deletCategory = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/categories/${id}`);

    dispatch({
      type: DELET_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + e,
    });
  }
};
