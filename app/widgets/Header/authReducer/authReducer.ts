import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
	name: "auth",
	initialState: {
		isAuth: false,
	},
	reducers: {
		login(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
	},
});

export default authReducer.reducer;
export const { login, logout } = authReducer.actions;
