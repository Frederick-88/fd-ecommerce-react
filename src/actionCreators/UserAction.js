import axios from "axios";

const url = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
const tokenAdmin = localStorage.getItem("token-admin");

export const getDataProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/product/getproduct`);
      const output = response.data;

      dispatch({
        type: "USER_GET_DATA_PRODUCT",
        payload: output.data,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};
