import { applyMiddleware, combineReducers, legacy_createStore } from '@reduxjs/toolkit';
import { authReducer } from './Authentication/Reducer';
import { thunk } from "redux-thunk";

const rooterReducer=combineReducers({
    auth: authReducer,
}); 

export const store=legacy_createStore(rooterReducer,applyMiddleware(thunk))