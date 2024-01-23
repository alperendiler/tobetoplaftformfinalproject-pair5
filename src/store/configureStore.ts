import {Action, ThunkAction, combineReducers, configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./loading/loadingSlice";
import authSlice from "./auth/authSlice";


export const rootReducer = combineReducers({
	loading: loadingReducer,
	auth: authSlice,

});

export const store = configureStore({reducer: rootReducer});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;