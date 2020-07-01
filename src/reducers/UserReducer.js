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
        dataCart: [...state.dataCart, action.payload],
      };

    case "DELETE_ITEM_FROM_CART":
      const filteredItem = state.dataCart.filter((item) => {
        if (item._id === action.payload._id) {
          return false;
        } else return true;
      });
      return {
        ...state,
        dataCart: filteredItem,
      };

    default:
      return state;
  }
};

export default UserReducer;
