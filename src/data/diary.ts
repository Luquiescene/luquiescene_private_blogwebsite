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
		id: 260329,
		content:
			"什么时候这个博客才能上线啊...",
		date: "2026-03-29T10:30:00Z",
		images: ["/images/diary/260329/1.webp","/images/diary/260329/2.webp"],
	},
	{
		id: 260403,
		content:
			"深夜23:47，依旧在一点点搭建博客。",
		date: "2026-04-03T15:47:00Z",
	},
	{
		id: 260424,
		content:
			"手机端好卡，所以把Live2D和樱花飘落效果去掉了。",
		date: "2026-04-24T23:59:00Z",
	},
	{
		id: 260426,
		content:
			"哈哈，评论功能终于上线了，不知道能不能成功。",
		date: "2026-04-26T12:56:00Z",
	}
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
