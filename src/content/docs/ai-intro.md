---
title: 大语言模型 (LLM) 入门基础
description: 深入理解大语言模型的基本概念、Token 机制与生成原理
---

大语言模型 (Large Language Models, 简称 LLM) 是基于深度学习构建的能够理解、生成和处理人类语言的基础模型。

---

## 1. LLM 核心原理解析

### 1.1 什么是 Token？
大模型并不直接处理文字字符串，而是将文本切分为 **Token (词元)**。

- 在英文中，一个 Token 大约相当于 0.75 个单词。
- 在中文中，一个汉字可能对应 1 ~ 2 个 Token。

```python
# 示例：使用 tiktoken 计算 Token 数量
import tiktoken

enc = tiktoken.get_encoding("cl100k_base")
tokens = enc.encode("Hello AI 教程网！")
print("Token 列表:", tokens)
print("Token 数量:", len(tokens))
```

### 1.2 上下文窗口 (Context Window)
上下文窗口是指模型单次推理能够接收与处理的最大 Token 数量总和（包括 Prompt + 格式输出）。

| 模型名称 | 上下文窗口大小 | 特点 |
| :--- | :--- | :--- |
| **GPT-4o** | 128,000 Tokens | 适合处理长文档与复杂多模态任务 |
| **Claude 3.5 Sonnet** | 200,000 Tokens | 逻辑推理与代码生成能力极强 |
| **Gemini 1.5 Pro / 2.0 Flash** | 1,000,000 ~ 2,000,000 Tokens | 极长上下文，支持全书/视频处理 |

---

## 2. Transformer 架构与自注意力机制

主流 LLM 大多采用基于 **Transformer** 的 Decoder-Only 架构。

> **自注意力机制 (Self-Attention)**：
> 允许模型在处理句子中的某个词时，自动计算该词与句子中其他所有词的相关度权重，从而准确捕捉长距离语义关联。

```text
输入文本: "苹果公司发布了新的 iPhone"
注意力关注关系:
["苹果"] ---> ["公司"] (语义指代科技公司，而非水果)
```

---

## 3. 小结与下一阶段
掌握 Token 与上下文的概念是高效使用与开发 AI 应用的第一步。下一步我们将探索如何撰写结构化的 Prompt 提示词！
