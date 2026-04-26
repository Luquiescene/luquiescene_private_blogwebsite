export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

export type DeviceCategory = {
	[categoryName: string]: Device[];
};

export const devicesData: DeviceCategory = {
	"笔记本电脑": [
		{
			name: "Dell Inspiron 15 7000 Gaming",
			image: "/images/device/dell-inspiron-7000.webp",
			specs: "i5-7300HQ / 20GB RAM / 64位 Windows",
			description: "日常学习、编程、游戏主力笔记本，性能稳定够用。",
			link: "https://www.dell.com/support/product-details/zh-cn/product/inspiron-15-7577-laptop/resources/manuals",
		},
	],
	"手机": [
		{
			name: "HUAWEI Mate 30 Pro 5G",
			image: "/images/device/huawei-mate30pro.webp",
			specs: "5G 旗舰 / 曲面屏 / 长续航",
			description: "日常主力手机，流畅稳定，使用体验良好。",
			link: "https://consumer.huawei.com/cn/support/phones/mate30-pro-5g/",
		},
	],
};