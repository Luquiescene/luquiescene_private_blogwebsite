// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Luquiescene's GitHub",
		//imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		imgurl: "/images/friends/1.webp",
		desc: "博主的代码空间",
		siteurl: "https://github.com/luquiescene",
		tags: ["GitHub", "个人主页", "技术"]
	},
	{
		id: 2,
    	title: "Luquiescene's Bilibili", // 改成你自己的昵称
    	imgurl: "/images/friends/2.webp", // 替换成你复制的链接
    	desc: "偶尔分享技术与日常的小站",
    	siteurl: "https://space.bilibili.com/1164158241",
    	tags: ["哔哩哔哩", "个人主页"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
