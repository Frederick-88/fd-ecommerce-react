import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;
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

export const deleteUser = (dataId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/users/delete/${dataId}`, {
        headers: { "x-access-token": tokenAdmin },
      });

      dispatch({
        type: "DELETE_USER",
        payload: dataId,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};

// FOR ADMIN PRODUCT PART

export const addDataProduct = (FormAddData, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/product/addproduct`,
        FormAddData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": tokenAdmin,
          },
        }
      );
      const output = response.data;
      dispatch({
        type: "ADD_DATA_PRODUCT",
        // payload must be the return from backend because that's best
        payload: output.data,
      });
    } catch (error) {
      const errorOutput = error.response;

      if (errorOutput.status === 400) {
        dispatch({
          type: "ADD_PRODUCT_FAILED",
          payload: "Please fill all field in the form.",
        });
      }
    }
  };
};

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

export const editDataProduct = (FormEditData, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${url}/product/editproduct/${data._id}`,
        FormEditData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": tokenAdmin,
          },
        }
      );
      const output = response.data;
      dispatch({
        type: "EDIT_DATA_PRODUCT",
        // payload must be the return from backend because that's best
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
