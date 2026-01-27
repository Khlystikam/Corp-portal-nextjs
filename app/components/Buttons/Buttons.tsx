import React from "react";

export default function Button(clisk: () => void, title: string) {
	return (
		<button
			onClick={clisk}
			title="button"
			className="flex flex-row justify-center items-center w-full h-full cursor-pointer bg-pink-900/80 rounded-md hover:scale-105 transition duration-300 ease-in-out"
		>
			{title}
		</button>
	);
}
