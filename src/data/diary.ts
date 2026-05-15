// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 测试日记数据
const diaryData: DiaryItem[] = [
	{
		id: 260215,
		content:
			"用蜂鸣器演奏《神的随波逐流》，提前祝各位新年快乐！",
		date: "2026-02-15T00:00:00Z",
		images: ["/images/diary/260215/1.webp","/images/diary/260215/2.webp","/images/diary/260215/3.webp","/images/diary/260215/4.webp"],
	},
	{
		id: 260329,
		content:
			"今天我自己的小站终于上线了！博客网站是纯前端的，使用Mizuki模板搭建。",
		date: "2026-03-29T07:00:00Z",
		images: ["/images/diary/260329/1.webp","/images/diary/260329/2.webp"],
	},
	{
		id: 260405,
		content:
			"网站更新：1.迁移网址；2.加入Live2D模型；3.优化和更新界面显示；4.修复若干错误（此处省略XX字）。",
		date: "2026-04-05T00:00:00Z",
		images: ["/images/diary/260405/1.webp"]
	},
	{
		id: 260429,
		content:
			"电机改音响？！硬盘改音响？！奇怪的音乐播放器又增加了，哈哈。",
		date: "2026-04-29T15:00:00Z",
		images: ["/images/diary/260429/1.webp","/images/diary/260429/2.webp"]
	},
	{
		id: 260502,
		content:
			"今天测试了基于ESP-NOW协议的单片机无线通信。实测150米左右居然仍可通信。屏幕显示内容：receive data:random8。显示不完整是屏幕刷新率的问题，目视正常。",
		date: "2026-05-02T15:00:00Z",
		images: ["/images/diary/260502/1.webp"]
	},
	{
		id: 260509,
		content:
			"今天是2026年5月9日。音理，生日快乐！（画师：B站-@小嘉伙QwQ）",
		date: "2026-05-09T15:00:00Z",
		images: ["/images/diary/260509/1.webp"]
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};
