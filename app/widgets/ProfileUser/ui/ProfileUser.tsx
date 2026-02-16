"use client";

import { USERICON_ITEMS } from "../model/UserIcon";

export const ProfileUser = () => {
	return (
		<div className="flex flex-row justify-center items-center w-full h-full">
			{USERICON_ITEMS.map((item) => {
				return (
					<button
						key={item.key}
						title="User"
						className="flex flex-row justify-center items-center w-full h-full cursor-pointer bg-pink-900/80 rounded-md hover:scale-105 transition duration-300 ease-in-out"
					>
						<item.icon size={24} className="min-w-6" />
					</button>
				);
			})}
		</div>
	);
};

export default ProfileUser;
