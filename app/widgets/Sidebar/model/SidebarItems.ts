import { Home, Users, FileText, Mail } from "lucide-react";

export const SIDEBAR_ITEMS = [
	{ label: "Дашборд", href: "/pages/home", icon: Home },
	{ label: "Сотрудники", href: "/pages/employees", icon: Users },
	{ label: "Документы", href: "/pages/documents", icon: FileText },
	{ label: "Сообщения", href: "/pages/messages", icon: Mail },
];
