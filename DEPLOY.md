# 上线检查与部署

## 推荐方式

将本项目作为 Vite 静态单页应用部署到 Vercel。构建命令为 `npm run build`，输出目录为 `dist`。项目根目录的 `vercel.json` 会将作品详情等站内路径回退到 `index.html`，由前端按 URL 显示相应页面。

## 发布步骤

1. 将项目提交到 Git 仓库；`node_modules`、`dist` 和日志已由 `.gitignore` 排除。
2. 在 Vercel 导入该仓库，框架选择 Vite，构建命令 `npm run build`，输出目录 `dist`。
3. 先使用预览部署检查首页、`/projects/planet`、手机菜单、图片和字体，再绑定正式域名。

## 正式公开前需要替换

- `src/data.ts` 中的姓名、经历、联系方式、作品及 Skill 演示内容。
- 每个作品 `detailImages` 的真实图片；当前详情页仍显示灰色占位块。
- PDF 简历文件并接入下载按钮；当前按钮只显示演示提示。
- 英文版内容并接入语言切换按钮；当前控件尚未切换语言。

本地字体位于 `public/fonts`。图片和 SVG 位于 `public/assets`。新增作品图片后，在 `src/data.ts` 中使用 `/assets/文件名` 引用。
