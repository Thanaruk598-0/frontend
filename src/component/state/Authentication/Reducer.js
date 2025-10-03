import { isPresentInFavorites } from "../../../AdminComponent/config/logic";
import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null


}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null,
                success: null
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.playload,
                success: "Register Success",
            };
             case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.playload,
            };
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.playload)
                    ? state.favorites.filter((item) => item.id !== action.playload.id)
                    : [action.playload, ...state.favorites]
            };
        case LOGOUT:
        return initialState;
         
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FREGISTER_FAILURE:
        case ADD_TO_FAVORITE_FREGISTER_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: action.playload,
                success: null
            };
        default:
            return state;



    }

};
