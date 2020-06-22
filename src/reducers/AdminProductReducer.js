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
      console.log(dataAfterDelete);

      return {
        ...state,
        dataProduct: dataAfterDelete,
      };

    default:
      return state;
  }
};

export default AdminUserReducer;
