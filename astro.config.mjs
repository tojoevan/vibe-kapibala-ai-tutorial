import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Vibe Kapibala AI 教程网',
      description: '全静态、低饱和度极简手册风格 AI 学习与工具速查手册',
      defaultLocale: 'zh-CN',
      locales: {
        'zh-CN': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // 侧边栏配置：无 Emoji 专业结构化分组
      sidebar: [
        {
          label: '快速导航与关于',
          items: [
            { label: '关于本站与设计理念', link: '/about/' },
            { label: 'GitHub + Cloudflare 部署指南', link: '/cloudflare-github-deploy/' },
          ],
        },
        {
          label: '01. AI 基础知识',
          items: [
            { label: '大语言模型 (LLM) 入门', link: '/ai-intro/' },
          ],
        },
        {
          label: '02. Prompt 提示词工程',
          items: [
            { label: 'Prompt 核心技巧与结构设计', link: '/prompt-basic/' },
          ],
        },
        {
          label: '03. Agent 智能体与框架',
          items: [
            { label: 'AI Agent 核心概念与架构', link: '/llm-agent-overview/' },
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
