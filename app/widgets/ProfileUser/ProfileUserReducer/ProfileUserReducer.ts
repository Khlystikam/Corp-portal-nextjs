"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
}

interface ApiResponse {
	status: string;
	code: number;
	total: number;
	data: User[];
}

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://fakerapi.it/api/v2/Users" }),
	endpoints: (builder) => ({
		getUsers: builder.query<unknown, void>({
			query: () => "/",
		}),
	}),
});

export const { useGetUsersQuery } = apiSlice;
