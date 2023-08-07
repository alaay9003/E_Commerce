import { useInsertData } from "../../hooks/useInsertData";
import {
  ADD_NEW_ADRESS,
  DELLET_ADDRESS,
  GET_ADDRESS,
  GET_ERROR,
  GET_ONE_ADDRESS,
  GET_USER,
  UPDATE_ADDRESS,
  UPDATE_PASSWORD,
  UPDATE_USER,
} from "../type";
import useGetDataToken from "./../../hooks/useGetDataToken";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const addNewAdress = (data) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/addresses", data);
    console.log(res);
    dispatch({
      type: ADD_NEW_ADRESS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + error,
    });
  }
};

export const getAllAddress = () => async (dispatch) => {
  try {
    const res = await useGetDataToken("/api/v1/addresses");
    //console.log(res.data);
    dispatch({
      type: GET_ADDRESS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + error,
    });
  }
};

export const delletAddress = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/addresses/${id}`);
    //console.log(res.data);
    dispatch({
      type: DELLET_ADDRESS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + error,
    });
  }
};

export const updateAddress = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/addresses/${id}`, body);

    dispatch({
      type: UPDATE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.response,
    });
  }
};

export const getOneAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses/${id}`);

    dispatch({
      type: GET_ONE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.response,
    });
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);

    dispatch({
      type: GET_USER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.response,
    });
  }
};

export const updateUser = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData("/api/v1/users/updateMe", body);
    dispatch({
      type: UPDATE_USER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.response,
    });
  }
};

export const updateUserPassword = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      "/api/v1/users/changeMyPassword",
      body
    );
    dispatch({
      type: UPDATE_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.response,
    });
  }
};
