const initialState = {
  tokenAdmin: localStorage.getItem("token-admin"),
  tokenUser: localStorage.getItem("token-user"),
  // alert for login feedbacks
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
  // only for register success
  registerSuccessToastifyNotif: {
    show: false,
    message: "",
    variant: "",
  },
  // for form control feedback. (react bootstrap)
  formControlError: {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
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

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        registerSuccessToastifyNotif: {
          show: true,
          message: action.payload,
          variant: "success",
        },
      };

    case "REGISTER_USER_FAIL":
      return {
        ...state,
        formControlError: {
          ...state.error,
          ...action.payload,
        },
      };

    case "REGISTER_USER_INVALID":
      return {
        ...state,
        alert: {
          show: true,
          message: action.payload,
          variant: "danger",
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
