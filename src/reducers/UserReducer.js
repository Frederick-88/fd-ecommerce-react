import { toast } from "react-toastify";
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
      const data = {
        ...action.payload,
        qtyBuy: 1,
      };
      const dataIsSame = state.dataCart.find((item) => {
        return item._id === data._id;
      });

      if (!dataIsSame) {
        toast.success("Item added to cart!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        return {
          ...state,
          dataCart: [...state.dataCart, data],
        };
      } else {
        return state;
      }

    case "INCREASE_QTY_BUY":
      const filterDataToAdd = state.dataCart.filter((item) => {
        if (action.payload === item._id) {
          console.log(item.qtyBuy);
          console.log(item.qtyBuy + 1);
          return item.qtyBuy + 1;
        } else {
          return false;
        }
      });

      const FilterData = state.dataCart.filter((item) => {
        if (action.payload === item._id) {
          return false;
        } else {
          return true;
        }
      });
      console.log(filterDataToAdd);
      console.log(FilterData);

      const mergeAddedData = [...FilterData, ...filterDataToAdd];
      console.log(mergeAddedData);

      return {
        ...state,
        dataCart: mergeAddedData,
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
