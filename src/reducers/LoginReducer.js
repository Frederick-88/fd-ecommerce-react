const initialState = {
  tokenAdmin: localStorage.getItem("token-admin"),
  tokenUser: localStorage.getItem("token-user"),
  alert: {
    show: false,
    message: "",
    variant: "light",
  },
  // only for the homepage(user)
  toastifyNotif: {
    show: false,
    message: "",
    variant: "",
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ADMIN_FAILED":
      return {
        ...state,
        alert: {
          show: true,
          message: action.payload,
          variant: "danger",
        },
      };

    case "LOGIN_ADMIN_SUCCESS":
      localStorage.setItem("token-admin", action.payload);
      return {
        ...state,
        tokenAdmin: action.payload,
      };

    case "LOGIN_USER_FAILED":
      return {
        ...state,
        alert: {
          show: true,
          message: action.payload,
          variant: "danger",
        },
      };

    case "LOGIN_USER_SUCCESS":
      localStorage.setItem("token-user", action.payload);
      return {
        ...state,
        tokenUser: action.payload,
        toastifyNotif: {
          show: true,
          message: "You've successfully login! ",
          variant: "success",
        },
      };

    case "LOGOUT_USER":
      localStorage.removeItem("token-user");
      return {
        ...state,
        tokenUser: "",
        toastifyNotif: {
          show: true,
          message: "You've successfully logout!",
          variant: "danger",
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
