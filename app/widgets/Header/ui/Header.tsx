"use client";

import { useState } from "react";
import { HEADER_ITEMS } from "@/app/widgets/Header/model/HeaderIconsItem";
import { LiveDateTime } from "@/app/widgets/Header/ui/DateClock";
import { Button } from "@/app/components/Buttons/Buttons";
import Popup from "@/app/components/Popup/Popup";
import Link from "next/link";
import styles from "@/app/widgets/Header/ui/Header.module.css";
import Image from "next/image";
import logo from "@/public/logo.webp";
import type { RootState } from "@/app/state/store";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/widgets/Header/AuthReducer/AuthReducer";
import { ProfileUser } from "@/app/widgets/ProfileUser/ui/ProfileUser";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const dispatch = useDispatch();

	const openPopupHandler = () => {
		setIsOpen(true);
	};

	const closePopupHandler = () => {
		setIsOpen(false);
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

				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch(login());
						closePopupHandler();
					}}
					className="w-[30%] h-12 p-2 rounded bg-pink-900/80 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
				>
					Войти
				</button>
			</form>
		);
	};

	return (
		<div className="flex flex-row justify-between w-full h-full">
			{/* logo */}
			<div className="flex w-10/100 bg-gray-900/50 p-2 rounded-lg">
				<div className="w-50 h-full">
					<Link href="/">
						<Image src={logo} alt="logo corp-portal" />
					</Link>
				</div>
			</div>

			<div className="w-70/100 h-full flex flex-row justify-around items-center p-2 gap-5 rounded-[10px]">
				{/* дата и время */}
				<LiveDateTime />

				{/* кнопки уведомлений */}
				<div className={styles.мiddleBlockNotifications + " flex flex-row justify-around items-center w-15/100 h-full bg-gray-900/50 rounded-lg"}>
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
				<div className={styles.мiddleBlockPersonalProgressBar + " w-60/100 h-full bg-gray-900/50 rounded-lg"}>{isAuth}</div>
			</div>

			{/* логирование/ЛК */}
			<div
				className={
					styles.button +
					" button-lk relative flex justify-center items-center w-10/100 h-full bg-gray-900/50 p-3 rounded-[10px] text-sm md:text-lg lg:text-xl self-center"
				}
			>
				{isAuth ? <ProfileUser /> : <Button onClick={openPopupHandler} title="Вход" />}
			</div>

			{isOpen && <Popup objectPopup={FormAuthor()} width="w-[50%]" height="h-[60%]" onClose={closePopupHandler} />}
		</div>
	);
};
