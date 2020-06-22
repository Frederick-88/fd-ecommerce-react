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

    default:
      return state;
  }
};

export default AdminUserReducer;
