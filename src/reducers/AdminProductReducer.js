const initialState = {
  dataProduct: [],
};

const AdminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PRODUCT":
      return {
        ...state,
        dataProduct: action.payload,
      };

    case "DELETE_DATA_PRODUCT":
      const dataAfterDelete = state.dataProduct.filter((item) => {
        //   action.payload = id product.
        if (item._id === action.payload) {
          return false;
        } else return true;
      });

      return {
        ...state,
        dataProduct: dataAfterDelete,
      };

    case "EDIT_DATA_PRODUCT":
      const dataAfterEdit = state.dataProduct.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else return item;
      });
      return {
        ...state,
        dataProduct: dataAfterEdit,
      };

    default:
      return state;
  }
};

export default AdminUserReducer;
