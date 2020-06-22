import axios from "axios";

const url = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
const tokenAdmin = localStorage.getItem("token-admin");

export const getDataUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/users/get`, {
        headers: { "x-access-token": tokenAdmin },
      });
      const output = response.data;
      console.log(output);

      dispatch({
        type: "GET_DATA_USER",
        payload: output.data,
      });
    } catch (error) {
      const output = error.response;
      console.log(output);
    }
  };
};
