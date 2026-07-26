# 🦫 Vibe Kapibala AI 教程库 (vibe-kapibala-ai-tutorial)

一个全静态、高性能、零服务器成本、零数据库依赖的 AI 知识与工具学习手册平台。采用结构化全景分类导航与树状手册结构，专为 AI 开发者与学习者打造。

- 🌐 **在线体验 / 部署平台**: GitHub + Cloudflare Pages (SSG 静态部署)
- 仓库地址: [https://github.com/tojoevan/vibe-kapibala-ai-tutorial](https://github.com/tojoevan/vibe-kapibala-ai-tutorial)

---

## ⚡ 核心优势与架构设计

1. **🚀 100% 全静态 SSG (零数据库限制)**：
   - 采用 **Astro + Starlight** 静态渲染引擎，构建时直接输出全套纯 HTML/CSS/JS 文件。
   - 100% 打满 Cloudflare Edge CDN 全球边缘节点，**数据库/API 调用数为 0**，不受任何 Cloudflare D1/KV 每日读写次数限制，支持海量高并发。

2. **📁 单层 Markdown 平铺维护 (`src/content/docs/`)**：
   - 所有教程文件全部平铺保存在 `src/content/docs/` 单层目录下（如 `ai-intro.md`、`prompt-basic.md`），无须创建繁琐的多级子文件夹。
   - 树状分类菜单在 `astro.config.mjs` 中集中配置，更新或改动分类只需改配置文件，极度方便 GitHub 协同维护。

3. **🔍 零服务器端依赖的纯静态全文检索 (Pagefind)**：
   - 构建阶段离线自动建立全局词元索引，前端支持快捷键 `Ctrl + K` 或点击搜索框进行毫秒级全文检索。

4. **💬 基于 GitHub Discussions 的第三方互动评论 (Giscus)**：
   - 预置 Giscus 章节评论组件（[Comment.astro](src/components/Comment.astro)），读者留言与勘误建议全自动同步至项目的 GitHub Discussions 讨论区。

---

## 📂 项目结构概览

```text
vibe-kapibala-ai-tutorial/
├── src/
│   ├── components/
│   │   ├── Comment.astro        # Giscus 章节留言互动组件
│   │   └── CustomFooter.astro   # 页脚扩展 (挂载评论区)
│   ├── content/
│   │   ├── docs/                # 平铺存放的 Markdown 教程
│   │   │   ├── index.mdx        # 网站首页 (全景导航入口)
│   │   │   ├── cloudflare-github-deploy.md # 快速开始与 Cloudflare 部署教程
│   │   │   ├── ai-intro.md      # 01. AI 基础知识
│   │   │   ├── prompt-basic.md  # 02. Prompt 提示词工程
│   │   │   └── llm-agent-overview.md # 03. Agent 智能体架构
│   │   └── config.ts            # Starlight Schema 内容校验
│   └── styles/
│       └── custom.css           # 全局高质感 Gradient 主题样式
├── astro.config.mjs             # 侧边栏与渲染引擎配置文件
├── package.json
└── README.md
```

---

## 🛠️ 本地开发指南

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发预览
```bash
npm run dev
```
打开浏览器访问 `http://localhost:4321` 预览页面。

### 3. 构建静态产物
```bash
npm run build
```
静态文件将生成至 `dist/` 目录，构建过程中会自动调用 Pagefind 建立索引。

---

## ✍️ 如何新增或编辑教程？

1. **新建 Markdown 文件**：
   在 `src/content/docs/` 目录下新建一个 `.md` 文件（如 `my-new-tutorial.md`），写入标准 Markdown 内容：
   ```markdown
   ---
   title: 我的新 AI 教程
   description: 教程简要描述
   ---

   这里是教程的核心内容...
   ```

2. **配置侧边栏分类**：
   打开 `astro.config.mjs`，在 `sidebar` 数组中的对应分类下加入该链接：
   ```javascript
   {
     label: '🧠 01. AI 基础知识',
     items: [
       { label: '我的新 AI 教程', link: '/my-new-tutorial/' },
     ],
   }
   ```

3. **提交推送至 GitHub**：
   直接提交 Git 变更，Cloudflare Pages 将自动触发增量编译并发布上线！

---

## ☁️ 部署至 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers 与 Pages** > **创建应用程序** > **Pages** > **连接到 Git**。
2. 授权关联仓库 `tojoevan/vibe-kapibala-ai-tutorial`。
3. 填入构建参数：
   - **框架预设 (Framework preset)**：`Astro`
   - **构建命令 (Build command)**：`npm run build`
   - **输出目录 (Build output directory)**：`dist`
4. 点击 **保存并部署** 即可。

---

## 💬 配置 Giscus 留言互动

1. 在 GitHub 仓库设置 (**Settings** > **General**) 中开启 **Discussions** 功能。
2. 访问 [giscus.app](https://giscus.app/zh-CN) 输入仓库名称获取对应的仓库 ID 参数。
3. 编辑 `src/components/Comment.astro`，更新 `data-repo` 与 `data-repo-id` 即可。

---

## 📄 开源许可

[MIT License](LICENSE)
