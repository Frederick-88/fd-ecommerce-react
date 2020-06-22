const initialState = {
  token: localStorage.getItem("token-admin"),
  alert: {
    show: false,
    message: "",
    variant: "light",
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
        token: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
