"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SIDEBAR_ITEMS } from "../model/SidebarItems";
import { VERSION_APP } from "../../../settings";

export const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [widthSidebar, setWidthSidebar] = useState("w-[15%]");
	const [spanTextButton, setSpanTextButton] = useState("visible");
	const pathname = usePathname();

	const hideOpenSidebar = () => {
		if (!collapsed) {
			setCollapsed(true);
			setWidthSidebar("w-[5%]");
			setSpanTextButton("hidden");
		} else {
			setCollapsed(false);
			setWidthSidebar("w-[15%]");
			setSpanTextButton("visible");
		}
	};

	return (
		<div className={widthSidebar + " min-w-fit left-bar p-5 rounded-[10px] bg-gray-900/50"}>
			<aside className="relative h-full">
				{/* Кнопка Toggle */}
				<div className="flex justify-end p-2">
					<button onClick={() => hideOpenSidebar()} className="p-1 bg-slate-800 hover:bg-slate-700 rounded-md cursor-pointer transition">
						{collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
					</button>
				</div>

				{/* Меню */}
				<nav className="flex-1 px-2 space-y-2 mt-4">
					{SIDEBAR_ITEMS.map((item) => {
						// Проверяем, активна ли ссылка
						const isActive = pathname === item.href;

						return (
							<Link
								key={item.href}
								href={item.href}
								className={
									isActive
										? ` flex items-center gap-4 p-2 rounded-lg transition-colors group bg-violet-600/80 text-amber-100 font-bold`
										: ` flex items-center gap-4 p-2 rounded-lg transition-colors group bg-slate-700/50 hover:bg-slate-700`
								}
							>
								<item.icon size={24} className="min-w-6" />

								<span className={spanTextButton + " text-xs md:text-sm lg:text-base whitespace-nowrap overflow-hidden transition-all duration-300"}>
									{item.label}
								</span>
							</Link>
						);
					})}
				</nav>

				{/* Footer сайдбара */}
				<div className="absolute w-1/1 bottom-0 text-center">Version {VERSION_APP}</div>
			</aside>
		</div>
	);
};
