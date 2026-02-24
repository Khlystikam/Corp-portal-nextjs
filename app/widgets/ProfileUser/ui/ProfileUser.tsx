"use client";

import { useDispatch } from "react-redux";
import { Button } from "@/app/components/Buttons/Buttons";
import { logout } from "@/app/widgets/Header/AuthReducer/AuthReducer";
import { useGetUsersQuery } from "@/app/widgets/ProfileUser/ProfileUserReducer/ProfileUserReducer";

interface User {
	firstname: string;
	[key: string]: unknown;
}

interface UsersResponse {
	data: User[];
}

export const ProfileUser = () => {
	// Используйте generic в самом хуке, если это возможно, вместо as
	const { data, isLoading } = useGetUsersQuery() as { data: UsersResponse | undefined; isLoading: boolean };
	const dispatch = useDispatch();

	// Безопасное получение данных
	const firstUserFirstName = data?.data?.[2]?.firstname || "";
	const firstUserLastName = data?.data?.[2]?.lastname || "";

	const logoutHandler = () => {
		dispatch(logout());
	};

	if (isLoading) return <div>Загрузка...</div>;

	return (
		<div>
			<div>
				<button>{firstUserFirstName + " " + firstUserLastName}</button>
			</div>
			<Button onClick={logoutHandler} title="Вход" />
		</div>
	);
};
