import React from "react";

export default function Popup(width: string, height: string) {
	return (
		<div className="absolute top-0 left-0 z-100 w-screen h-screen bg-gray-950 flex justify-center items-center">
			<div className={width + " " + height + " bg-amber-400 rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200"}>Popup</div>
		</div>
	);
}
