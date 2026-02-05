"use client";

import { useState } from "react";
import { HEADER_ITEMS } from "../model/HeaderIconsItem";
import { LiveDateTime } from "./DateClock";
import Button from "@/app/components/Buttons/Buttons";
import Popup from "@/app/components/Popup/Popup";
import styles from "./Header.module.css";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openPopupHandler = () => {
		setIsOpen(true);
	};

	const closePopupHandler = () => {
		setIsOpen(false);
	};

	return (
		<div className="flex flex-row justify-between w-full h-full">
			{/*  */}
			<div className="flex w-10/100 bg-gray-900/50 p-2 rounded-lg">
				<p className="text-sm md:text-lg lg:text-xl self-center">Logo</p>
			</div>

			<div className="w-70/100 h-full flex flex-row justify-around items-center p-2 gap-5 rounded-[10px]">
				{/* дата и время */}
				<LiveDateTime />

				{/* кнопки уведомлений */}
				<div className="flex flex-row justify-around items-center w-15/100 h-full bg-gray-900/50 rounded-lg">
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

				{/* личный прогресс бар */}
				<div className="w-60/100 h-full bg-gray-900/50 rounded-lg"></div>
			</div>

			{/* логирование/ЛК */}
			<div className={styles.button + " button-lk flex w-10/100 h-full bg-gray-900/50 p-3 rounded-[10px] text-sm md:text-lg lg:text-xl self-center"}>
				{Button(() => openPopupHandler(), "Вход")}
			</div>

			{isOpen && <Popup width="w-[50%]" height="h-[60%]" onClose={closePopupHandler} />}
		</div>
	);
};
