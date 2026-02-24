import React from "react";

interface ButtonProps {
	onClick: () => void;
	title: string;
}

export const Button = ({ onClick, title }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			title="button"
			className="flex flex-row justify-center items-center w-full h-full cursor-pointer bg-pink-900/80 rounded-md hover:scale-105 transition duration-300 ease-in-out"
		>
			{title}
		</button>
	);
};
