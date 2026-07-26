---
title: 项目介绍与 GitHub + Cloudflare 部署指南
description: 如何在 Cloudflare Pages 上免费、无服务器部署本 AI 教程网站
---

本教程网站是一个全静态、超轻量、零服务器成本的 AI 知识库。本文将引导你了解本项目架构，并将你的教程项目一键部署在 **GitHub** + **Cloudflare Pages** 上。

---

## 1. 为什么选择全静态方案？

在许多教程网站中，使用数据库（如 MySQL、PostgreSQL 或 Cloudflare D1/KV）会带来以下挑战：
1. **API 读写配额限制**：Cloudflare 免费版对 D1/KV 的每日请求次数有限制。高并发或刷接口会导致配额耗尽。
2. **运维成本与延迟**：数据库查询增加了服务器与客户端之间的网络往返延迟 (RTT)。

### 本项目解决方案
- **100% SSG 静态编译**：使用 Astro 将 Markdown 提前编译为静态 HTML 页面。
- **打满 Edge CDN 缓存**：发布到 Cloudflare Pages 后，页面直接由全球边缘节点毫秒级分发，数据库调用为 **0 次**。
- **单层 Markdown 统一平铺**：所有教程直接放在 `src/content/docs/` 下，无需管理多级文件夹。

---

## 2. 在 GitHub 与 Cloudflare 上部署流程

### 步骤 1：将代码推送到 GitHub
将本地仓库上传至 GitHub：
```bash
git init
git add .
git commit -m "feat: init vibe kapibala ai tutorial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vibe-kapibala-ai-tutorial.git
git push -u origin main
```

### 步骤 2：在 Cloudflare Pages 中关联项目
1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)。
2. 在左侧菜单进入 **Workers 与 Pages** > 点击 **创建应用程序** > 选择 **Pages** > **连接到 Git**。
3. 授权 GitHub 并选择刚才创建的 `vibe-kapibala-ai-tutorial` 仓库。
4. 填写构建配置（构建预设选择 **Astro**）：
   - **框架预设 (Framework preset)**：`Astro`
   - **构建命令 (Build command)**：`npm run build`
   - **输出目录 (Build output directory)**：`dist`
5. 点击 **保存并部署**。

稍等 1-2 分钟，Cloudflare Pages 将自动完成构建，并为您分配一个独立的二级域名（例如 `vibe-kapibala-ai-tutorial.pages.dev`）。

---

## 3. 配置 Giscus 留言互动插件

要开启章节底部的 GitHub Discussions 互动评论，只需在 `src/components/Comment.astro` 中替换为您仓库的 Giscus 参数：

1. 在 GitHub 仓库设置中开启 **Discussions** 功能。
2. 访问 [giscus.app](https://giscus.app/zh-CN) 输入您的仓库名称（例如 `username/repo`）。
3. 复制生成的 `data-repo` 与 `data-repo-id`，填入 `src/components/Comment.astro` 即可。

```html
<!-- src/components/Comment.astro -->
<script>
  script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME');
  script.setAttribute('data-repo-id', 'R_kgDOHXXXXX');
</script>
```

每次你向 GitHub `main` 分支提交或更新 Markdown 文件，Cloudflare Pages 就会自动触发增量编译并发布最新教程，真正实现无缝的自动化极速体验！
