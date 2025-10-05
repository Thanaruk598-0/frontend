// Reducers.js
import * as actionTypes from "./ActionTypes";

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_CART_REQUEST:
    case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
    case actionTypes.UPDATE_CARTITEM_REQUEST:
    case actionTypes.REMOVE_CARTITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case actionTypes.LOGOUT:
        localStorage.removeItem("jwt");
        return {
          ...state,
          cartItems: [],
          cart: null,
          success: "logout success",
        };

    default:
      return state;
  }
};

export default cartReducer;
