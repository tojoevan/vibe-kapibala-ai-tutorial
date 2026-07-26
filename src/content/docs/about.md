---
title: 关于本站
description: 了解 Vibe Kapibala AI 教程网的设计理念、技术架构与使用指南
---

**Vibe Kapibala AI 教程网** 是一个专为 AI 开发者、研究人员及爱好者打造的手册式极速学习与检索平台。

不同于博客或微博类信息杂乱、无序的展示方式，本站参考了 **菜鸟教程 (runoob)** 与 **W3Cschool** 的结构化设计体系，提供条理清晰、分类严谨的知识卡片与树状导航。

---

## ⚡ 架构特性与设计理念

### 1. 100% 全静态 SSG (零数据库限制)
- 基于 **Astro + Starlight** 静态生成。编译阶段直接导出为标准 HTML 文件。
- 部署在 **Cloudflare Pages** 的全球 Edge CDN 上，没有任何后台数据库查询或 Worker 调用。
- **数据库 API 请求数 = 0**，突破所有读写配额限制，高并发下依然毫秒级响应。

### 2. 单层平铺式 Markdown 维护 (`docs/`)
- 所有教程源文件统一直接保存在仓库的 `src/content/docs/` 单层目录下（例如 `ai-intro.md`）。
- 目录分类、阅读顺序及大纲结构完全通过 `astro.config.mjs` 中的 `sidebar` 配置文件驱动，避免深层复杂文件夹目录的繁琐。

### 3. 离线全文检索 (Pagefind)
- 构建阶段离线自动为全部教程生成 Pagefind 索引。
- 支持全局快捷键 `Ctrl + K` 或点击搜索框，在前端毫秒级检索全文关键知识点，无需访问后端服务器。

### 4. 基于 GitHub Discussions 的互动留言
- 结合 **Giscus** 插件，读者在章节底部的建议与疑问会自动同步存入项目 GitHub Discussions 讨论区。
- 作者可以在 GitHub 直接跟进解答与更新，实现极简的社区互动。

---

## 📂 源码与贡献

- **GitHub 官方仓库**：[tojoevan/vibe-kapibala-ai-tutorial](https://github.com/tojoevan/vibe-kapibala-ai-tutorial)
- **开源协议**：MIT License
