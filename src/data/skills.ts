// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// 编程语言
	{
		id: "java",
		name: "Java",
		description: "掌握基础语法与面向对象思想，能够完成简单程序与逻辑开发。",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 4, months: 8 },
		color: "#ED8B00",
	},
	{
		id: "csharp",
		name: "C#",
		description: "用于 Unity 游戏开发与简单项目，理解类、方法与基础逻辑。",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		color: "#239120",
	},
	{
		id: "cpp",
		name: "C++",
		description: "学习单片机与硬件编程，掌握基础语法与简单项目开发。",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 5 },
		color: "#00599C",
	},
	{
		id: "python",
		name: "Python",
		description: "了解基础语法，能编写简单脚本与小工具。",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 2, months: 0 },
		color: "#3776AB",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description: "学习 RPG Maker 扩展与网页基础，了解基本语法。",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 9 },
		color: "#F7DF1E",
	},

	// 前端 & 博客相关
	{
		id: "astro",
		name: "Astro",
		description: "使用 Mizuki 主题搭建个人博客，完成配置、部署与优化。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 1 },
		projects: ["blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "了解原子化 CSS，能在博客中进行简单样式调整。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#06B6D4",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "能看懂并修改博客配置文件，了解基础类型语法。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#3178C6",
	},

	// 游戏开发
	{
		id: "unity",
		name: "Unity",
		description: "使用 C# 开发简单 2D/3D 游戏，理解引擎基础操作。",
		icon: "logos:unity",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#000000",
	},
	{
		id: "rpg-maker",
		name: "RPG Maker",
		description: "制作独立游戏，使用插件与 JS 进行简单扩展。",
		icon: "material-symbols:menu-book",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 9 },
		color: "#059669",
	},

	// 工具
	{
		id: "vscode",
		name: "VS Code",
		description: "日常主力开发工具，熟练使用插件、格式化与基本配置。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#007ACC",
	},
	{
		id: "vs-community",
		name: "Visual Studio",
		description: "用于 C#、C++ 开发，熟悉项目创建与调试。",
		icon: "logos:visual-studio",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#4681B5",
	},
	{
		id: "git",
		name: "Git",
		description: "用于博客版本管理，掌握基础提交、同步操作。",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#F05032",
	},

	// 硬件 & 单片机
	{
		id: "mcu",
		name: "单片机开发",
		description: "使用 C++ 完成简单硬件交互与小项目制作。",
		icon: "material-symbols:memory",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 5 },
		color: "#4040c5",
	},
];