const initialState = {
  dataProduct: [],
  dataCart: [],
  alert: {
    show: false,
    message: "",
    variant: "light",
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_GET_DATA_PRODUCT":
      return {
        ...state,
        dataProduct: action.payload,
      };

    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        dataCart: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
