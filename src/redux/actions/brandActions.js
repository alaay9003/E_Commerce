import {
  CREATE_BRAND,
  DELET_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_ONE_BRAND,
} from "./../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { type } from "@testing-library/user-event/dist/type";
import useDeleteData from "../../hooks/useDeleteData";

export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=6&page=${page}`);
    dispatch({
      type: CREATE_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/brands", formData);
    // console.log(response.status)
    dispatch({
      type: CREATE_BRAND,
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

export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`);
    // console.log(response.status)
    dispatch({
      type: GET_ONE_BRAND,
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

export const deletBrand = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/brands/${id}`);
    dispatch({
      type: DELET_BRAND,
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
