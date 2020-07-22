import axios from "axios";

const url = `${process.env.REACT_APP_HEROKU_BACKEND_URL}`;

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

export const userLoginFacebook = (data) => {
  // remember to make if the name is same that directly proceed to login.
  var facebookName = data.name;
  // delete space between text & lowercase them.
  let removedSpacesFacebookName = facebookName.split(" ").join("");
  let fixLowercasedFacebookName = removedSpacesFacebookName.toLowerCase();

  // get only 4 unique number from id to avoid phoneNumber backend validation
  var uniqueNumberOfId = data.id.substr(data.id.length - 4);

  let autoRegisterWithFacebook = {
    username: fixLowercasedFacebookName,
    email: `fb+${data.email}`,
    phoneNumber: `00001111${uniqueNumberOfId}`,
    password: "00001111",
  };
  return async (dispatch) => {
    try {
      const responseRegister = await axios.post(
        `${url}/users/register`,
        autoRegisterWithFacebook
      );
      if (responseRegister.data.status === "success") {
        // auto login
        let autoLoginWithFacebook = {
          email: `fb+${data.email}`,
          password: "00001111",
        };
        try {
          const response = await axios.post(
            `${url}/users/login`,
            autoLoginWithFacebook
          );

          const output = response.data;

          if (output.status === "success") {
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: output.token,
            });
          }
        } catch (error) {
          const output = error.response.data;
          console.log(output);
        }
      } else {
        return false;
      }
    } catch (error) {
      const output = error.response.data;
      if (output.status === "error") {
        // auto login
        let autoLoginWithFacebook = {
          email: `fb+${data.email}`,
          password: "00001111",
        };
        try {
          const response = await axios.post(
            `${url}/users/login`,
            autoLoginWithFacebook
          );

          const output = response.data;

          if (output.status === "success") {
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: output.token,
            });
          }
        } catch (error) {
          const output = error.response.data;
          console.log(output);
        }
      } else {
        return false;
      }
    }
    // return (dispatch) => {
    //   dispatch({
    //     type: "USER_LOGIN_FACEBOOK",
    //     payload: data,
    //   });
    // };
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

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`, data);
      console.log(response);

      const output = response.data;
      if (output.status === "success") {
        dispatch({
          type: "REGISTER_USER_SUCCESS",
          payload: output.message,
        });
      }
    } catch (error) {
      const output = error.response.data;
      if (output.message) {
        dispatch({
          type: "REGISTER_USER_FAIL",
          payload: output.message,
        });
      } else {
        dispatch({
          // error of same username/email/phoneNumber,it has to be unique no duplication/same username.
          type: "REGISTER_USER_INVALID",
          payload: output.error,
        });
      }
    }
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };
};
