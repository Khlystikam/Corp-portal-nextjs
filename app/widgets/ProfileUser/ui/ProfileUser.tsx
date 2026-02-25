"use client";

import { useDispatch } from "react-redux";
import { useState } from "react";
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
	const { data, isLoading } = useGetUsersQuery() as { data: UsersResponse | undefined; isLoading: boolean };
	const dispatch = useDispatch();
	const [activeDropdownList, setActiveDropdownList] = useState("hidden");

	const firstUserFirstName = data?.data?.[2]?.firstname || "";
	const firstUserLastName = data?.data?.[2]?.lastname || "";

	const logoutHandler = () => {
		dispatch(logout());
	};

	const activeDropdownListSwich = () => {
		setActiveDropdownList(activeDropdownList === "hidden" ? "block" : "hidden");
	};

	const dropdownListProfileUser = () => {
		return (
			<div className={activeDropdownList + " absolute top-16 left-0 flex flex-col justify-between items-end gap-3 w-full h-auto p-5 rounded-b-2xl text-white bg-gray-900/50"}>
				<div className="flex flex-col gap-1.25 w-full h-22 text-[14px]">
					<button className="flex flex-row justify-center items-center w-full h-full cursor-pointer bg-pink-900/80 rounded-md hover:scale-105 transition duration-300 ease-in-out">
						Настройки профиля
					</button>
					<Button onClick={logoutHandler} title="Вход" />
				</div>
			</div>
		);
	};

	if (isLoading) return <div>Загрузка...</div>;

	return (
		<div>
			<button
				className="flex flex-row justify-center items-center w-full h-full p-4 cursor-pointer bg-pink-900/80 rounded-md hover:scale-105 transition duration-300 ease-in-out"
				onClick={activeDropdownListSwich}
			>
				{firstUserFirstName + " " + firstUserLastName}
			</button>
			{dropdownListProfileUser()}
		</div>
	);
};
