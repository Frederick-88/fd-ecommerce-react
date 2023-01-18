import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;
// const tokenAdmin = localStorage.getItem("token-admin");

export const getDataProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: "SET_IS_PRODUCT_LOADING",
      boolean: true,
    });

    try {
      const response = await axios.get(`${url}/product/getproduct`);
      const output = response.data;

      dispatch({
        type: "USER_GET_DATA_PRODUCT",
        payload: output.data,
      });
      dispatch({
        type: "SET_IS_PRODUCT_LOADING",
        boolean: false,
      });
    } catch (error) {
      const errorOutput = error.response;
      console.log(errorOutput);
    }
  };
};

export const addItemToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: item,
    });
  };
};

// inside cart object
export const increaseQtyBuy = (itemId) => {
  return (dispatch) => {
    dispatch({
      type: "INCREASE_QTY_BUY",
      payload: itemId,
    });
  };
};

export const decreaseQtyBuy = (itemId) => {
  return (dispatch) => {
    dispatch({
      type: "DECREASE_QTY_BUY",
      payload: itemId,
    });
  };
};

export const deleteItemFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_ITEM_FROM_CART",
      payload: item,
    });
  };
};
