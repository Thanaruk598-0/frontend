import { api } from "../../../config/api.js";
import {
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  GET_RESTAURANTS_ORDER_FAILURE,
} from "./ActionType.js";

// Update order status
export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

      const response = await api.put(
        `/api/admin/orders/${orderId}/${orderStatus}`,
        {},
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      const updatedOrder = response.data;
      console.log("update order ", updatedOrder);

      dispatch({
        type: UPDATE_ORDER_STATUS_SUCCESS,
        payload: updatedOrder,
      });

    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: UPDATE_ORDER_STATUS_FAILURE,
        payload: error
      });
    }
  };
};

// Fetch restaurant orders
export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });

      const { data } = await api.get(
        `/api/admin/order/restaurant/${restaurantId}`,
        {
          params: { order_status: orderStatus },
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      console.log("restaurants order -----", data);

      dispatch({
        type: GET_RESTAURANTS_ORDER_SUCCESS,
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_ORDER_FAILURE,
        payload: error
      });
    }
  };
};
