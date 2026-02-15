import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../widgets/Header/authReducer/authReducer";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
