import React from "react";

export default function Popup({ width, height, onClose }: { width: string; height: string; onClose: () => void }) {
	return (
		<div className="fixed flex justify-center items-center w-dvw h-dvh inset-0 bg-gray-950/90 z-50">
			<div className={`${width} ${height} relative flex justify-center items-center`}>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-full p-4 bg-pink-900/80 hover:scale-110 transition duration-300 ease-in-out text-white text-[14px] cursor-pointer shadow-[0_0_10px_#000]"
				>
					✕
				</button>

				<div className="flex justify-center items-center w-full h-full bg-gray-900 rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200">Popup</div>
			</div>
		</div>
	);
}
