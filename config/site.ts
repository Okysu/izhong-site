export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "战斗天使钟晨瑶",
	title: "战斗天使钟晨瑶",
	description: "钟晨瑶，中国内地女演员，2023年10月12日，主演的电影《二次呼吸》入围平遥国际电影节；12月1日，参演的现实题材电影《热搜》在中国大陆上映。",
	navItems: [
    {
      label: "瀑布流",
      href: "/images",
    },
    {
      label: "留言板",
      href: "/message",
    },
		{
			label: "音乐",
			href: "/music",
		},
		{
			label: "展台",
			href: "/gallery",
		},
		{
			label: "更新日志",
			href: "/log",
		}
	],
	links: {
		github: "https://github.com/Okysu/izhong-site",
		images: "/images",
	},
};
