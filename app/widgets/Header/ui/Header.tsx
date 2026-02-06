"use client";

import { useState } from "react";
import { HEADER_ITEMS } from "../model/HeaderIconsItem";
import { LiveDateTime } from "./DateClock";
import Button from "@/app/components/Buttons/Buttons";
import Popup from "@/app/components/Popup/Popup";
import styles from "./Header.module.css";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [author, setAuthor] = useState(false);

	const openPopupHandler = () => {
		setIsOpen(true);
	};

	const closePopupHandler = () => {
		setIsOpen(false);
	};

	const successfulAuthor = () => {
		setAuthor(true);
	};

	const FormAuthor = () => {
		return (
			<form className="flex flex-col justify-between items-center gap-3 w-[60%] h-[70%] text-white text-sm md:text-lg lg:text-xl">
				<div className="flex flex-col gap-1.25 w-[80%] h-22">
					<p>Введите логин</p>
					<input className="p-2 rounded bg-gray-800" type="text" placeholder="Логин" />
				</div>
				<div className="flex flex-col gap-1.25 w-[80%] h-22">
					<p>Введите пароль</p>
					<input className="p-2 rounded bg-gray-800" type="password" placeholder="Пароль" />
				</div>

				<button onClick={successfulAuthor} className="w-[30%] h-12 p-2 rounded bg-pink-900/80 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
					Войти
				</button>
			</form>
		);
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
				{author ? Button(() => console.log("Вы вошли"), "Вы вошли") : Button(() => openPopupHandler(), "Вход")}
			</div>

			{isOpen && <Popup objectPopup={FormAuthor()} width="w-[50%]" height="h-[60%]" onClose={closePopupHandler} />}
		</div>
	);
};
