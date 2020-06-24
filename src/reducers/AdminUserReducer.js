const initialState = {
  dataUser: [],
};

const AdminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER":
      return {
        ...state,
        dataUser: action.payload,
      };
    case "DELETE_USER":
      const dataAfterDelete = state.dataUser.filter((item) => {
        //   action.payload = id product.
        if (item._id === action.payload) {
          return false;
        } else return true;
      });

      return {
        ...state,
        dataUser: dataAfterDelete,
      };

    default:
      return state;
  }
};

export default AdminUserReducer;
