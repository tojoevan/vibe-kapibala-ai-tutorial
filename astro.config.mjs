import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '卡皮教程',
      description: '专注 AI 领域的极简空间感速查手册与资料导航',
      favicon: '/logo.png',
      logo: {
        src: './public/logo.png',
        alt: '卡皮教程 Logo',
        replacesTitle: false,
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      // 侧边栏配置：体系化 AI 领域分组 + 专著电子书
      sidebar: [
        {
          label: '快速导航与关于',
          items: [
            { label: '关于本站与设计理念', link: '/about/' },
            { label: 'GitHub + Cloudflare 部署指南', link: '/cloudflare-github-deploy/' },
          ],
        },
        {
          label: '📖 专著《AI Agent 理论与实践》',
          items: [
            { label: '全书总览与前言', link: '/ai-agent-book/' },
            { label: '第 1 章：AI Agent 原理与演进', link: '/ai-agent-book-ch1/' },
            { label: '第 2 章：Agent 核心认知架构', link: '/ai-agent-book-ch2/' },
            { label: '第 3 章：多 Agent 协作系统', link: '/ai-agent-book-ch3/' },
          ],
        },
        {
          label: '01. AI Agent 智能体',
          items: [
            { label: 'AI Agent 核心概念与架构', link: '/llm-agent-overview/' },
          ],
        },
        {
          label: '02. Skills 技能与工作流',
          items: [
            { label: 'Agent Skills 扩展能力设计', link: '/llm-agent-overview/' },
          ],
        },
        {
          label: '03. AI 编程与协作工具',
          items: [
            { label: 'Vibe Coding & Claude Code 实战', link: '/prompt-basic/' },
          ],
        },
        {
          label: '04. LLM 大模型基础',
          items: [
            { label: '大语言模型 (LLM) 入门', link: '/ai-intro/' },
          ],
        },
        {
          label: '05. Prompt 提示词工程',
          items: [
            { label: 'Prompt 核心技巧与结构设计', link: '/prompt-basic/' },
          ],
        },
        {
          label: '06. RAG 与向量数据库',
          items: [
            { label: 'RAG 检索增强生成原理', link: '/ai-intro/' },
          ],
        },
        {
          label: '07. 部署与站务说明',
          items: [
            { label: 'Cloudflare Pages 静态部署', link: '/cloudflare-github-deploy/' },
          ],
        },
      ],
      // 交互与定制组件重写
      components: {
        Header: './src/components/CustomHeader.astro',
        Footer: './src/components/CustomFooter.astro',
      },
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
