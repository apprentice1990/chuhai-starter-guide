# 出海起步指南

给还没有关键词、还没有网站的人用的中文静态站。技术栈是 Astro + Starlight。页面按这个顺序排：选词、建站、域名部署、内容、获客。

临时名称是 `chuhai-starter-guide`。域名还没定，`astro.config.mjs` 里故意不写 `site`。

## 本地运行

需要 Node.js 22.x。

```bash
node -v
npm install
npm run dev
```

开发服务器默认在 `http://localhost:4321/`。

生产构建与本地预览：

```bash
npm run build
npm run preview
```

`npm run build` 把静态文件写到 `dist/`。域名未设置时，构建日志里会出现 sitemap 被跳过的提示，这是预期结果，命令仍应成功退出。

## 部署到 Vercel

1. 把这个仓库导入 Vercel。
2. 项目设置使用：

| 设置 | 值 |
| --- | --- |
| Framework Preset | Astro |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 22.x |

仓库里的 `vercel.json`、`package.json` 的 `engines.node` 和 `.node-version` 与上表一致。Node.js 版本在 Vercel 项目设置里选 **22.x**。

3. 先用 Vercel 分配的域名打开首页、选词页和清单页。
4. 自定义域名确定后，再把 `astro.config.mjs` 里的 `site` 设为 `https://` 加上主主机名，重新部署。那一次构建才会生成 sitemap。

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 首页 |
| `/standards/` | 收录标准与不收清单 |
| `/keywords/` | 选词，另有清单和词表 |
| `/build/` | 建站，另有清单 |
| `/deploy/` | 域名与部署，另有清单 |
| `/writing/` | 内容，另有清单和单页模板 |
| `/acquire/` | 获客，另有清单 |

内容这一栏的文件在 `src/content/docs/writing/`，对外路径是 `/writing/`。不要把这一栏改名为 `content`，以免和 `src/content` 撞名。

标了「待填」的段落和正文里的 `TODO` 是还没核对或要读者自己填的空位。标了「模板」的表格和代码块可以直接复制。
