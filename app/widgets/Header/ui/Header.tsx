"use client";

import React from "react";
import { HEADER_ITEMS } from "../model/HeaderIconsItem";

export const Header = () => {
	return (
		<div className="flex flex-row justify-between w-full h-full">
			<div className="w-10/100 bg-gray-900/50 p-2 rounded-lg">
				<p className="text-sm">Logo</p>
			</div>
			<div className="w-70/100 h-full flex flex-row justify-around items-center p-2 gap-5 rounded-[10px]">
				<div className="h-full flex flex-row justify-between w-30/100 bg-gray-900/50 rounded-lg px-4 text-[20px]">
					<p className="w-5/10 text-left">20.01.26</p>
					<p className="w-5/10 text-right">23:30</p>
				</div>
				<div className="flex flex-row justify-around items-center w-20/100 h-full bg-gray-900/50 rounded-lg">
					{HEADER_ITEMS.map((item) => {
						return (
							<button
								title="button"
								key={item.key}
								className="flex flex-row justify-center items-center w-8 h-8 cursor-pointer bg-pink-900/80 rounded-md hover:scale-110 transition duration-300 ease-in-out"
							>
								<item.icon size={24} className="min-w-6" />
							</button>
						);
					})}
				</div>
				<div className="w-50/100 h-full bg-gray-900/50 rounded-lg"></div>
			</div>
			<div className="w-10/100 h-full bg-gray-900/50 p-2 rounded-[10px] text-sm">Login/Logout</div>
		</div>
	);
};
