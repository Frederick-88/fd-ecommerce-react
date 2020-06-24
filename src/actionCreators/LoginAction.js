import axios from "axios";

const url = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;

export const loginAdmin = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/loginadmin`, data);
      const output = response.data;

      if (output.status === "success") {
        dispatch({
          type: "LOGIN_ADMIN_SUCCESS",
          payload: output.token,
        });
      }
    } catch (error) {
      const output = error.response.data;
      dispatch({
        type: "LOGIN_ADMIN_FAILED",
        payload: output.error,
      });
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/login`, data);
      const output = response.data;

      if (output.status === "success") {
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: output.token,
        });
      }
    } catch (error) {
      const output = error.response.data;
      dispatch({
        type: "LOGIN_USER_FAILED",
        payload: output.error,
      });
    }
  };
};
