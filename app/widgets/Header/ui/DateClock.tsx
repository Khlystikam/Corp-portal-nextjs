"use client";

import { useState, useEffect } from "react";

// функция даты и времени
export const LiveDateTime = () => {
	const [date, setDate] = useState<Date | null>(null);

	useEffect(() => {
		const now = new Date();
		setDate(now);

		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	if (!date) {
		return <div className="h-10 w-[20%] text-sm md:text-lg lg:text-xl animate-pulse bg-gray-800 rounded-lg" />;
	}

	return (
		<div className="h-full flex flex-row justify-between w-[20%] bg-gray-900/50 rounded-lg px-4 text-sm md:text-lg lg:text-xl">
			<p className="w-[50%] text-left self-center">{date.toLocaleDateString("ru-RU")}</p>
			<p className="w-[50%] text-right self-center">{date.toLocaleTimeString("ru-RU")}</p>
		</div>
	);
};
