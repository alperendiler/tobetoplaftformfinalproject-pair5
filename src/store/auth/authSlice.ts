import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { AddUserRequest } from "../../models/requests/user/addUserRequest";
interface AuthState {
	token: string | null;
	user?: AddUserRequest; 
  }
  
  const initialState: AuthState = {
	token: null,
  };
const authSlice = createSlice({
	name: "auth",
	initialState,
	  	reducers: {
			setToken: (state, action: PayloadAction<string>) => {
				state.token = action.payload;
			  },
			  clearToken: (state) => {
				state.token = null;
			  },
			  addUser:(state, action: PayloadAction<AddUserRequest>) =>{
				state.user = action.payload;
			}
	},
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
