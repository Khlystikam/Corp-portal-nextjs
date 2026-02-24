import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
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

export default AuthReducer.reducer;
export const { login, logout } = AuthReducer.actions;
