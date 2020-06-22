import axios from "axios";

const url = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
const tokenAdmin = localStorage.getItem("token-admin");

// FOR ADMIN USER PART

export const getDataUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/users/get`, {
        headers: { "x-access-token": tokenAdmin },
      });
      const output = response.data;

      dispatch({
        type: "GET_DATA_USER",
        payload: output.data,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};

// FOR ADMIN PRODUCT PART

export const getDataProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/product/getproduct`);
      const output = response.data;

      dispatch({
        type: "GET_DATA_PRODUCT",
        payload: output.data,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};

export const deleteDataProduct = (dataId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/product/deleteproduct/${dataId}`, {
        headers: { "x-access-token": tokenAdmin },
      });

      dispatch({
        type: "DELETE_DATA_PRODUCT",
        payload: dataId,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};
