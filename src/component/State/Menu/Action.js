import { api } from "../../../config/api";
import {
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
} from "./ActionTypes";

export const createMenuItem = ({ menu, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
        const { data } = await api.post("/api/admin/food", menu, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    }
};

export const getMenuItemsByRestaurantId = (reqData) => async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
        const { data } = await api.get(
            `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
            { headers: { Authorization: `Bearer ${reqData.jwt}` } }
        );
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
    }
};

export const updateMenuItemsAvailability = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/food/${foodId}`, {}, { headers: { Authorization: `Bearer ${jwt}` } });
        dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload: error });
    }
};

export const deleteFoodAction = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
        const { data } = await api.delete(`/api/admin/food/${foodId}`, { headers: { Authorization: `Bearer ${jwt}` } });
        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
    } catch (error) {
        dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
    }
};
