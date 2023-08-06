import {
  CREATE_ProductS,
  GET_ALL_ProductS,
  GET_ERROR,
  GET_Product_DETAILS,
  GET_Product_Like,
  DELETE_Product,
  UPDATE_PRODUCT,
  GET_Product_BRAND,
} from "./../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

// create product
export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/products", formData);

    dispatch({
      type: CREATE_ProductS,
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

export const getProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);

    dispatch({
      type: GET_ALL_ProductS,
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

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);

    dispatch({
      type: GET_Product_DETAILS,
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

export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);

    dispatch({
      type: GET_Product_Like,
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
export const getProductByBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?brand=${id}`);

    dispatch({
      type: GET_Product_BRAND,
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
export const deletProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: DELETE_Product,
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

export const getAllProductPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_ProductS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );

    dispatch({
      type: UPDATE_PRODUCT,
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

export const getAllProductSearch = (queryStraing) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?${queryStraing}`);
    dispatch({
      type: GET_ALL_ProductS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
