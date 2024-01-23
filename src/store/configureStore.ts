import {Action, ThunkAction, combineReducers, configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./loading/loadingSlice";
import authSlice, { setToken } from "./auth/authSlice";


export const rootReducer = combineReducers({
	loading: loadingReducer,
	auth: setToken,

});

export const store = configureStore({reducer: rootReducer});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;