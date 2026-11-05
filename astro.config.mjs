// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 域名还没定。保持 site 不设置，构建时 sitemap 会跳过。
// 主域名确定后，改成 site: 'https://你的主域名' 再重新构建。
export default defineConfig({
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: '出海起步指南',
			description:
				'给还没有关键词、还没有网站的人：按选词、建站、域名部署、内容、获客五步，做出第一份能核对的产物。',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/apprentice1990/chuhai-starter-guide/edit/main/',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/apprentice1990/chuhai-starter-guide',
				},
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '从这里开始', link: '/' },
						{ label: '收录标准', slug: 'standards' },
					],
				},
				{
					label: '选词',
					items: [
						{ label: '怎么选第一个词', slug: 'keywords' },
						{ label: '选词清单', slug: 'keywords/checklist' },
						{ label: '候选词表', slug: 'keywords/sheet' },
					],
				},
				{
					label: '建站',
					items: [
						{ label: '做出第一版', slug: 'build' },
						{ label: '建站清单', slug: 'build/checklist' },
					],
				},
				{
					label: '域名部署',
					items: [
						{ label: '上线与域名', slug: 'deploy' },
						{ label: '部署清单', slug: 'deploy/checklist' },
					],
				},
				{
					label: '内容',
					items: [
						// 对外路径是 /writing/，文件在 src/content/docs/writing/。
						// 不要把这一栏改成 content，以免和 src/content 撞名。
						{ label: '把主页面写完', slug: 'writing' },
						{ label: '内容清单', slug: 'writing/checklist' },
						{ label: '单页模板', slug: 'writing/template' },
					],
				},
				{
					label: '获客',
					items: [
						{ label: '拿到第一次访问', slug: 'acquire' },
						{ label: '获客清单', slug: 'acquire/checklist' },
					],
				},
			],
		}),
	],
});
